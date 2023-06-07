const fs = require('fs')
const jose = require('jose')
const Ajv = require('ajv')
const yaml = require('js-yaml')
const moment = require('moment')

const ajv = new Ajv({
  strict: false,
})

const VC_RDF_CLASS = 'VerifiableCredential'
const VP_RDF_CLASS = 'VerifiablePresentation'

const isVC = (claimset)=>{
  return claimset.type === VC_RDF_CLASS || claimset.type.includes(VC_RDF_CLASS)
}
const isVP = (claimset)=>{
  return claimset.type === VP_RDF_CLASS || claimset.type.includes(VP_RDF_CLASS)
}

const publicKeyThumbprintUri = async (publicKeyJwk)=>{
  return jose.calculateJwkThumbprintUri(publicKeyJwk)
}

const getIssuer = (publicKeyJwk) => {
  const issuer = `did:jwk:${jose.base64url.encode(
    JSON.stringify(publicKeyJwk),
  )}`
  return issuer
}

const getPublicKey = async (vm) =>
  jose.importJWK(
    JSON.parse(jose.base64url.decode(vm.split(':')[2].split('#')[0])),
  )

const claimsetToTyp = (claimset) => {
  if (claimset.type === VC_RDF_CLASS || claimset.type.includes(VC_RDF_CLASS)) {
    return 'vc+ld+jwt'
  } else {
    return 'vp+ld+jwt'
  }
}

const updateClaimset = (issuer, claimset) => {
  if (claimset.issuer) {
    if (claimset.issuer.id) {
      claimset.issuer.id = issuer
    } else {
      claimset.issuer = issuer
    }
  }
  if (claimset.holder) {
    if (claimset.holder.id) {
      claimset.holder.id = issuer
    } else {
      claimset.holder = issuer
    }
  }
}

const sign = async (claimset, privateKeyJwk) => {
  if (!claimset){
    throw new Error('claimset is not defined.')
  }
  const { d, ...publicKeyJwk } = privateKeyJwk
  // console.log(await publicKeyThumbprintUri(publicKeyJwk))
  const issuer = getIssuer(publicKeyJwk)
  const typ = claimsetToTyp(claimset)
  updateClaimset(issuer, claimset)
  const header = {
    alg: privateKeyJwk.alg,
    iss: issuer,
    kid: '#0',
    typ,
    iat: moment().unix()
  }
  if (typ === 'vp+ld+jwt'){
    header.nonce = 'a4751a2e-6895-4e34-aa71-c3be512866f5'
    header.aud = 'https://verifier.example'
  }
  const jwt = await new jose.CompactSign(Buffer.from(JSON.stringify(claimset)))
    .setProtectedHeader(header)
    .sign(await jose.importJWK(privateKeyJwk))
  return jwt
}

const unsecured = (claimset) => {
  const typ = claimsetToTyp(claimset)
  const header = { alg: 'none', typ }
  return `${jose.base64url.encode(
    JSON.stringify(header),
  )}.${jose.base64url.encode(JSON.stringify(claimset))}.`
}

const loadJsonFile = (absolutePath) => {
  return JSON.parse(fs.readFileSync(absolutePath).toString())
}

const requireFile = (input) => {
  try {
    return loadJsonFile(input)
  } catch (e) {
    console.error('Could not load json from path: ' + input)
    return
  }
}

const requireInput = (input, key) => {
  const data = {}
  if (input) {
    data.inputJson = requireFile(input)
  }
  if (key) {
    data.keyJson = requireFile(key)
  }
  return data
}

const createVerifiableCredential = async ({ input, output, key }) => {
  const { inputJson, keyJson } = requireInput(input, key)
  const outputJson = { jwt: await sign(inputJson, keyJson) }
  fs.writeFileSync(output, JSON.stringify(outputJson, null, 2))
}

const createVerifiablePresentation = async ({ input, output, key }) => {
  let outputJson
  if (key) {
    const { inputJson, keyJson } = requireInput(input, key)
    outputJson = { jwt: await sign(inputJson, keyJson) }
  } else {
    const { inputJson } = requireInput(input)
    outputJson = { jwt: await unsecured(inputJson) }
  }
  fs.writeFileSync(output, JSON.stringify(outputJson, null, 2))
}

const validateProof = async ({ protectedHeader, claimset }) => {
  return {
    [protectedHeader.alg]: protectedHeader !== undefined && claimset !== undefined,
  }
}

const validateVC = `
title: W3C Verifiable Credential 
description: A JSON-LD Object of RDF type https://www.w3.org/2018/credentials#VerifiableCredential.
type: object
properties:
  '@context':
    type: array
    readOnly: true
    default:
      - https://www.w3.org/ns/credentials/v2
    items:
      - type: string
        const: https://www.w3.org/ns/credentials/v2
    additionalItems:
      type: string
      enum:
        - https://www.w3.org/ns/credentials/examples/v2
`

const validateVP = `
title: W3C Verifiable Presentation 
description: A JSON-LD Object of RDF type https://www.w3.org/2018/credentials#VerifiablePresentation.
type: object
properties:
  '@context':
    type: array
    readOnly: true
    default:
      - https://www.w3.org/ns/credentials/v2
    items:
      - type: string
        const: https://www.w3.org/ns/credentials/v2
    additionalItems:
      type: string
      enum:
        - https://www.w3.org/ns/credentials/examples/v2
`

const validateExampleAlumniCredential = `
title: W3C Example Alumni Credential
description: A JSON-LD Object of RDF type https://www.w3.org/ns/credentials/examples#ExampleAlumniCredential.
type: object
properties:
  '@context':
    type: array
    readOnly: true
    default:
      - https://www.w3.org/ns/credentials/v2
    items:
      - type: string
        const: https://www.w3.org/ns/credentials/v2
      - type: string
        const: https://www.w3.org/ns/credentials/examples/v2
  credentialSchema:
    type: object
    properties:
      id:
        type: string
        const: https://university.example/schemas/ExampleAlumniCredential
      type: 
        type: string
        const: JsonSchema
  credentialSubject:
    type: object
    properties:
      id:
        type: string
      alumniOf:
        type: object
        properties:
          id: 
            type: string
          name:
            type: string
`

const validateSchema = async (claimset) => {
  const schemas = {}
  let is_base_media_type_valid = false;
  if (isVC(claimset)){
    const validate = ajv.compile(yaml.load(validateVC))
    is_base_media_type_valid = validate(claimset)
  }
  if (isVP(claimset)){
    const validate = ajv.compile(yaml.load(validateVP))
    is_base_media_type_valid = validate(claimset)
  }
  if (!is_base_media_type_valid) {
    console.log(validate.errors)
  }
  schemas['https://www.w3.org/ns/credentials/v2'] = is_base_media_type_valid
  let is_credential_schema_valid = true
  if (claimset.credentialSchema && claimset.credentialSchema.id === 'https://university.example/schemas/ExampleAlumniCredential') {
    const validate = ajv.compile(yaml.load(validateExampleAlumniCredential))
    is_credential_schema_valid = validate(claimset)
    schemas[claimset.credentialSchema.id] = is_credential_schema_valid 
  }
  return schemas
}

const validateStatus = async (claimset) => {
  if (!claimset.credentialStats) {
    return undefined
  }
  return { ['is_suspended']: false, ['is_revoked']: false }
}

const verify = async (jwt) => {
  const { iss, kid } = jose.decodeProtectedHeader(jwt)
  const publicKey = await getPublicKey(iss + kid)
  const { payload, protectedHeader } = await jose.jwtVerify(jwt, publicKey)
  const proof = await validateProof({ protectedHeader, claimset: payload })
  const status = await validateStatus(payload)
  const schema = await validateSchema(payload)
  return JSON.parse(
    JSON.stringify({
      proof,
      status,
      schema,
      protectedHeader,
      claimset: payload,
    }),
  )
}

const verifyVerifiableCredential = async ({ input, output }) => {
  const { jwt } = requireFile(input)
  const result = await verify(jwt)
  fs.writeFileSync(output, JSON.stringify(result, null, 2))
}

const verifyVerifiablePresentation = async ({ input, output }) => {
  const { jwt } = requireFile(input)
  const result = await verify(jwt)
  fs.writeFileSync(output, JSON.stringify(result, null, 2))
}

module.exports = {
  createVerifiableCredential,
  createVerifiablePresentation,
  verifyVerifiableCredential,
  verifyVerifiablePresentation,
  verify,
}
