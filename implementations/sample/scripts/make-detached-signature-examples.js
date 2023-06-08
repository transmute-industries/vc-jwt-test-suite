const fs = require('fs')
const utils = require('../api/utils')
const controller = require('../api/controller')

const privateKeyJwk = require('../../../data/inputs/keys/private.key.ES384.json')

const credential = require('../../../data/outputs/sample/_minimal-credential.proof.verified.json')
const presentation = require('../../../data/outputs/sample/_minimal-presentation.proof.verified.json');


(async ()=>{

  const signer = await controller.signer(privateKeyJwk)
  const verifier = await controller.verifier(privateKeyJwk)

  credential.claimset.issuer = await controller.key.uri(privateKeyJwk)

  const credentialBytes = Buffer.from(JSON.stringify(credential.claimset))
  const detachedCredentialProof = await signer.sign(credentialBytes)

  await verifier.verify({
    protected: detachedCredentialProof.split('..')[0],
    payload: credentialBytes,
    signature: detachedCredentialProof.split('..')[1],
  })

  presentation.claimset.holder = await controller.key.uri(privateKeyJwk)

  const presentationBytes = Buffer.from(JSON.stringify(presentation.claimset))
  const detachedPresentationProof = await signer.sign(presentationBytes)

  await verifier.verify({
    protected: detachedPresentationProof.split('..')[0],
    payload: presentationBytes,
    signature: detachedPresentationProof.split('..')[1],
  })

  
  const examples = `
<pre class="example" title="Credential">
${JSON.stringify(credential.claimset, null, 2)}
</pre>

<pre class="example" title="Detached Credential Proof">
${detachedCredentialProof}
</pre>

<pre class="example" title="Presentation">
${JSON.stringify(presentation.claimset, null, 2)}
</pre>

<pre class="example" title="Detached Presentation Proof">
${detachedPresentationProof}
</pre>
  `
  
  fs.writeFileSync('detached-proofs-examples.html', examples)
  

})()
