const fs = require('fs')
const path = require('path')


const example = {
  '@context': [
    'https://www.w3.org/ns/credentials/v2',
    'https://www.w3.org/ns/credentials/examples/v2',
  ],
  type: ['VerifiableCredential', 'ExampleVerifiableNumber'],
  issuer: 'https://issuer.vendor.example',
  validFrom: '2023-06-07T21:14:14.148Z',
  credentialSubject: {
    id: `'';!--"<XSS>=&{()}`,
  },
}

fs.writeFileSync(
  path.resolve(__dirname, '../data/inputs/claimsets/xss-2.json'),
  JSON.stringify(example, null, 2),
)
