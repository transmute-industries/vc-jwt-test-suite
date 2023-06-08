const fs = require('fs')
const path = require('path')
const controller = require('../api/controller')
module.exports = [
  'controller [action]',
  'controller key',
  {
    alg: {
      alias: 'alg',
      description: 'Algorithm, see https://www.iana.org/assignments/jose/jose.xhtml#web-signature-encryption-algorithms'
    },
    output: {
      alias: 'o',
      description: 'Path to output document',
      demandOption: true,
    }
  },
  async (argv) => {
    if (argv.action === 'generate') {
      const { alg, private, public, output } = argv
      const k = await controller.key.generate(alg)
      let out = k
      if (private){
        out = k.privateKeyJwk
      }
      if (public){
        out = k.publicKeyJwk
      }
      const outputPath = path.resolve(process.cwd(),output)
      fs.writeFileSync(outputPath, JSON.stringify(out, null, 2)) 
    }
  },
]
