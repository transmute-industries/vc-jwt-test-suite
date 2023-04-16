const fs = require("fs");
const jose = require('jose');

const getIssuer = (publicKeyJwk) =>{
  const issuer = `did:jwk:${jose.base64url.encode(JSON.stringify(publicKeyJwk))}`;
  return issuer;
}

const getPublicKey = async (vm) => jose.importJWK(JSON.parse(jose.base64url.decode(vm.split(':')[2].split('#')[0])));

const sign = async (claimset, privateKeyJwk) => {
  const { d, ...publicKeyJwk } = privateKeyJwk;
  const issuer = getIssuer(publicKeyJwk)
  const jwt = await new jose.CompactSign(Buffer.from(JSON.stringify(claimset)))
  .setProtectedHeader({
    iss: issuer,
    kid: '#0',
    alg: privateKeyJwk.alg,
    typ: 'vc+ld+jwt',
    cty: 'vc+ld+json',
  })
  .sign(await jose.importJWK(privateKeyJwk));
  return jwt
}

const loadJsonFile = (absolutePath) => {
  return JSON.parse(fs.readFileSync(absolutePath).toString());
};

const requireFile = (input) => {
  try {
    return loadJsonFile(input);
  } catch (e) {
    console.error("Could not load json from path: " + input);
    return;
  }
}

const requireInput = (input, key) => {
  return {
    inputJson: requireFile(input),
    keyJson: requireFile(key)
  }
}

const createVerifiableCredential = async ({ input, output, key }) => {
  const {inputJson, keyJson} = requireInput(input, key);
  const outputJson = { jwt: await sign(inputJson, keyJson) };
  fs.writeFileSync(output, JSON.stringify(outputJson, null, 2));
};

const createVerifiablePresentation = async ({ input, output, key }) => {
  const {inputJson, keyJson} = requireInput(input, key);
  const outputJson = outputJson = { jwt: 'TODO' };
  fs.writeFileSync(output, JSON.stringify(outputJson, null, 2));
};

const verify = async (jwt) => {
  const { iss, kid } = jose.decodeProtectedHeader(jwt);
  const publicKey = await getPublicKey(iss + kid);
  const { payload, protectedHeader } = await jose.jwtVerify(jwt, publicKey);
  return { protectedHeader, payload };
};

const verifyVerifiableCredential = async ({ input, output }) => {
  const {jwt} = requireFile(input)
  const result = await verify(jwt);
  fs.writeFileSync(output, JSON.stringify(result, null, 2));
};

const verifyVerifiablePresentation = async ({ input, output }) => {
  const {jwt} = requireFile(input)
  const result = await verify(jwt);
  fs.writeFileSync(output, JSON.stringify(result, null, 2));
};

module.exports = {
  createVerifiableCredential,
  createVerifiablePresentation,
  verifyVerifiableCredential,
  verifyVerifiablePresentation,
  verify,
};

