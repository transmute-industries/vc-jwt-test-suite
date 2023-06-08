const jose = require('jose')

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
      const jws = await new jose.FlattenedSign(bytes)
        .setProtectedHeader({ alg, ...detachedHeaderParams })
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

const publicKeyToKid = async (publicKeyJwk) => {
  const kid = await jose.calculateJwkThumbprintUri(publicKeyJwk);
  return '#' + kid;
};

const key = { generate, format: formatJwk, did: publicKeyToDid, kid: publicKeyToKid, dereferencePublicKey }

const controller = { key, signer, verifier }

module.exports = controller