const jose = require('jose')

const fs = require('fs')
const controller = require('./controller')

const VC_RDF_CLASS = 'VerifiableCredential'
const VP_RDF_CLASS = 'VerifiablePresentation'

const isVC = (claimset) => {
  return claimset.type === VC_RDF_CLASS || claimset.type.includes(VC_RDF_CLASS)
}
const isVP = (claimset) => {
  return claimset.type === VP_RDF_CLASS || claimset.type.includes(VP_RDF_CLASS)
}

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

const validateProof = async ({ protectedHeader, claimset }) => {
  return {
    [protectedHeader.alg]:
      protectedHeader !== undefined && claimset !== undefined,
  }
}

const unsecured = (claimset) => {
  const typ = claimsetToTyp(claimset)
  const header = { alg: 'none', typ }
  return `${jose.base64url.encode(
    JSON.stringify(header),
  )}.${jose.base64url.encode(JSON.stringify(claimset))}.`
}

const sign = async (claimset, privateKeyJwk) => {
  if (!claimset) {
    throw new Error('claimset is not defined.')
  }
  if (!privateKeyJwk) {
    return unsecured(claimset)
  }
  const { d, ...publicKeyJwk } = privateKeyJwk
  const issuer = controller.key.did(publicKeyJwk)
  const typ = claimsetToTyp(claimset)
  updateClaimset(issuer, claimset)
  const header = {
    alg: privateKeyJwk.alg,
    iss: issuer,
    kid: '#0',
    typ,
    iat: moment().unix(),
  }
  if (typ === 'vp+ld+jwt') {
    header.nonce = 'a4751a2e-6895-4e34-aa71-c3be512866f5'
    header.aud = 'https://verifier.example'
  }
  const jwt = await new jose.CompactSign(Buffer.from(JSON.stringify(claimset)))
    .setProtectedHeader(header)
    .sign(await jose.importJWK(privateKeyJwk))
  return jwt
}

const verify = async (jwt) => {
  const unprotectedHeader = jose.decodeProtectedHeader(jwt)
  const { alg, iss, kid } = unprotectedHeader
  if (alg === 'none') {
    const claimset = jose.decodeJwt(jwt)
    const proof = { none: true }
    const status = await validateStatus(claimset)
    const schema = await validateSchema(claimset)
    return JSON.parse(
      JSON.stringify({
        proof,
        status,
        schema,
        unprotectedHeader,
        claimset,
      }),
    )
  }
  const publicKey = await controller.key.dereferencePublicKey(iss + kid)
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
  let validate = {
    errors: `claimset.type must include "${VC_RDF_CLASS}" or "${VP_RDF_CLASS}"`,
  }
  let is_base_media_type_valid = false
  if (isVC(claimset)) {
    validate = ajv.compile(yaml.load(validateVC))
    is_base_media_type_valid = validate(claimset)
  }
  if (isVP(claimset)) {
    validate = ajv.compile(yaml.load(validateVP))
    is_base_media_type_valid = validate(claimset)
  }
  if (!is_base_media_type_valid) {
    console.log(validate.errors)
  }
  schemas['https://www.w3.org/ns/credentials/v2'] = is_base_media_type_valid
  let is_credential_schema_valid = true
  if (
    claimset.credentialSchema &&
    claimset.credentialSchema.id ===
      'https://university.example/schemas/ExampleAlumniCredential'
  ) {
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

const Ajv = require('ajv')
const yaml = require('js-yaml')
const moment = require('moment')

const ajv = new Ajv({
  strict: false,
})




const loadJsonFile = (absolutePath) => {
  return JSON.parse(fs.readFileSync(absolutePath).toString())
}

const requireFile = (input) => {
  try {
    return loadJsonFile(input)
  } catch (e) {
    console.error(e)
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

const dataUri = (data, contentType = `application/vc+ld+json`) => {
  if (contentType === 'application/vc+ld+json') {
    return `data:${contentType};base64,${Buffer.from(
      JSON.stringify(data),
    ).toString('base64')}`
  }
  if (contentType === 'application/vc+ld+jwt') {
    return `data:${contentType};base64,${Buffer.from(data).toString('base64')}`
  }
  if (contentType === 'application/vp+ld+json') {
    return `data:${contentType};base64,${Buffer.from(
      JSON.stringify(data),
    ).toString('base64')}`
  }
  if (contentType === 'application/vp+ld+jwt') {
    return `data:${contentType};base64,${Buffer.from(data).toString('base64')}`
  }
  return null
}

const utils = {
  requireInput,
  isVC,
  isVP,
  claimsetToTyp,
  updateClaimset,
  validateProof,
  validateSchema,
  validateStatus,
  unsecured,
  sign,
  verify,
  dataUri,
}

module.exports = utils
