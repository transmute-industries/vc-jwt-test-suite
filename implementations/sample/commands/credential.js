const fs = require('fs')
const path = require('path')
const utils = require('../api/utils')
const credential = require('../api/credential')
module.exports = [
  'credential [action]',
  'verifiable credential',
  {
    input: {
      alias: 'i',
      description: 'Path to input document',
      demandOption: true,
    },
    output: {
      alias: 'o',
      description: 'Path to output document',
      demandOption: true,
    },
    key: {
      alias: 'k',
      description: 'Path to key',
    },
  },
  async (argv) => {
    if (argv.action === 'create') {
      const { input, key, output } = argv
      const { inputJson, keyJson } = utils.requireInput(
        path.resolve(process.cwd(), input),
        path.resolve(process.cwd(), key),
      )
      const outputJson = await credential.issue({
        claimset: inputJson,
        key: keyJson,
      })
      fs.writeFileSync(output, JSON.stringify(outputJson, null, 2))
    }
    if (argv.action === 'verify') {
      const { input, output } = argv
      const { inputJson } = utils.requireInput(input)
      const { jwt } = inputJson
      const outputJson = await credential.verify({
        jwt,
      })
      fs.writeFileSync(output, JSON.stringify(outputJson, null, 2))
    }
  },
]
