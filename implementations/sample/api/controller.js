const jose = require('jose')

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

const detachedHeaderParams = { b64: false, crit: ['b64'] }



const generate = async (alg, extractable = true) => {
  const { publicKey, privateKey } = await jose.generateKeyPair(alg, {
    extractable,
  })
  const publicKeyJwk = (await jose.exportJWK(
    publicKey,
  )) 
  
  const privateKeyJwk = (await jose.exportJWK(
    privateKey,
  )) 
  
  const holder = await jose.calculateJwkThumbprintUri(publicKeyJwk);
  const controller = publicKeyToDid(publicKeyJwk)

  publicKeyJwk.alg = alg
  publicKeyJwk.kid = holder

  privateKeyJwk.alg = alg
  privateKeyJwk.kid = holder

  return {
    id: controller + '#0',
    type: 'JsonWebKey',
    controller: holder,
    publicKeyJwk: formatJwk(publicKeyJwk),
    privateKeyJwk: formatJwk(privateKeyJwk),
  }
}

// TODO Remote KMS.
const signer = async (privateKeyJwk) => {
  const { alg } = privateKeyJwk
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {d, ...publicKewJwk} = privateKeyJwk
  const privateKey = await jose.importJWK(privateKeyJwk)
  return {
    alg: alg,
    iss: publicKeyToDid(publicKewJwk),
    kid: `#0`,
    sign: async (bytes) => {
      const typ = claimsetToTyp(JSON.parse(new TextDecoder().decode(bytes)))
      const jws = await new jose.FlattenedSign(bytes)
        .setProtectedHeader({ alg, typ, ...detachedHeaderParams })
        .sign(privateKey)
      return `${jws.protected}..${jws.signature}`
    },
  }
}

// TODO Remote KMS.
const verifier = async (
  publicKeyJwk,
) => {
  const { alg } = publicKeyJwk
  const publicKey = await jose.importJWK(publicKeyJwk)
  return {
    alg: alg,
    verify: async (jws) => {
      const { protectedHeader, payload } = await jose.flattenedVerify(
        jws,
        publicKey,
      )
      return { protectedHeader, payload }
    },
  }
}

const formatJwk = (jwk) => {
  const {
    kid,
    x5u,
    x5c,
    x5t,
    kty,
    crv,
    alg,
    use,
    key_ops,
    x,
    y,
    d,
    ...rest
  } = structuredClone(jwk)
  return JSON.parse(
    JSON.stringify({
      kid,
      kty,
      crv,
      alg,
      use,
      key_ops,
      x,
      y,
      d,
      x5u,
      x5c,
      x5t,
      ...rest,
    }),
  )
}

const publicKeyToDid = (publicKeyJwk) => {
  const id = `did:jwk:${jose.base64url.encode(
    JSON.stringify(formatJwk(publicKeyJwk)),
  )}`
  return id
}

const dereferencePublicKey = async (didUrl) =>
  jose.importJWK(
    JSON.parse(jose.base64url.decode(didUrl.split(':')[2].split('#')[0])),
  )

const publicKeyToUri = async (publicKeyJwk) => {
  return jose.calculateJwkThumbprintUri(publicKeyJwk);
};

const publicKeyToKid = async (publicKeyJwk) => {
  return '#' + publicKeyToUri(publicKeyJwk);
};


const key = { generate, format: formatJwk, uri: publicKeyToUri, did: publicKeyToDid, kid: publicKeyToKid, dereferencePublicKey }

const controller = { key, signer, verifier }

module.exports = controller