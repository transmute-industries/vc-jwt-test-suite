const fs = require('fs')
const path = require('path')
const utils = require('../api/utils')
const presentation = require('../api/presentation')
module.exports = [
  'presentation [action]',
  'verifiable presentation',
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
        input,
        key,
      )
      const outputJson = await presentation.issue({
        claimset: inputJson,
        key: keyJson,
      })
      fs.writeFileSync(output, JSON.stringify(outputJson, null, 2))
    }
    if (argv.action === 'verify') {
      const { input, output } = argv
      const { inputJson } = utils.requireInput(input)
      const { jwt } = inputJson
      const outputJson = await presentation.verify({
        jwt,
      })
      fs.writeFileSync(output, JSON.stringify(outputJson, null, 2))
    }
  },
]
