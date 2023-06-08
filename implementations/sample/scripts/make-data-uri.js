const fs = require('fs')
const utils = require('../api/utils')

const d1p = require('../../../data/outputs/sample/_minimal-credential.proof.json')
const d1 = require('../../../data/outputs/sample/_minimal-credential.proof.verified.json')

const u0 = utils.dataUri(d1p.jwt, 'application/vc+ld+jwt')
const u1 = utils.dataUri(d1.claimset, 'application/vc+ld+json')

const d2p = require('../../../data/outputs/sample/_minimal-credential.proof.json')
const d2 = require('../../../data/outputs/sample/_minimal-credential.proof.verified.json')

const u2 = utils.dataUri(d2p.jwt, 'application/vp+ld+jwt')
const u3 = utils.dataUri(d2.claimset, 'application/vp+ld+json')

const u4 = utils.dataUri(
  {
    '@context': ['https://www.w3.org/ns/credentials/v2'],
    type: ['VerifiablePresentation'],
    verifiableCredential: [
      utils.dataUri(
        {
          '@context': ['https://www.w3.org/ns/credentials/v2'],
          type: ['VerifiableCredential'],
          issuer: 'https://issuer.vendor.example',
          validFrom: '2023-06-07T21:14:14.148Z',
          credentialSubject: {
            id: 'https://subject.vendor.example',
          },
        },
        'application/vc+ld+json',
      ),
    ],
  },
  'application/vp+ld+json',
);


(async ()=>{

  const u5 = utils.dataUri(
    await utils.sign({
      '@context': ['https://www.w3.org/ns/credentials/v2'],
      type: ['VerifiablePresentation'],
      verifiableCredential: [
        utils.dataUri(
          await utils.sign({
            '@context': ['https://www.w3.org/ns/credentials/v2'],
            type: ['VerifiableCredential'],
            issuer: 'https://issuer.vendor.example',
            validFrom: '2023-06-07T21:14:14.148Z',
            credentialSubject: {
              id: 'https://subject.vendor.example',
            },
          }),
          'application/vc+ld+jwt',
        ),
      ],
    }),
    'application/vp+ld+jwt',
  )
  
  const examples = `
  
  <pre class="example" title="JSON-LD Credential">
  ${u1}
  </pre>
  
  <pre class="example" title="JWT Credential">
  ${u0}
  </pre>
  
  <pre class="example" title="JSON-LD Presentation">
  ${u3}
  </pre>
  
  <pre class="example" title="JWT Presentation">
  ${u2}
  </pre>
  
  <pre class="example" title="Nested Unsecured JSON-LD">
  ${u4}
  </pre>
  
  <pre class="example" title="Nested Unsecured JWT">
  ${u5}
  </pre>
  `
  
  fs.writeFileSync('data-uri-examples.html', examples)
  

})()
