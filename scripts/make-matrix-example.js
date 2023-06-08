const fs = require('fs')
const path = require('path')
const size =  500

const matrix = []
for (let i = 0; i < size; i++) {
  const rows = []
  for (let i = 0; i < size; i++) {
    rows.push(Math.random())
  }
  matrix.push(rows)
}

const example = {
  '@context': [
    'https://www.w3.org/ns/credentials/v2',
    'https://www.w3.org/ns/credentials/examples/v2',
  ],
  type: ['VerifiableCredential', 'ExampleVerifiableMatrix'],
  issuer: 'https://issuer.vendor.example',
  validFrom: '2023-06-07T21:14:14.148Z',
  credentialSubject: {
    id: 'https://ai.example',
    matrix: matrix,
  },
}

fs.writeFileSync(
  path.resolve(__dirname, '../data/inputs/claimsets/arrays-matrix-large.json'),
  JSON.stringify(example, null, 2),
)
