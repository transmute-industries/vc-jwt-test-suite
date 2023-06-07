const yargs = require('yargs')
const key = require('./commands/key')
const credential = require('./commands/credential')
const presentation = require('./commands/presentation')

yargs.scriptName('✨')
yargs.command(...key)
yargs.command(...credential)
yargs.command(...presentation)
yargs.help().alias('help', 'h').demandCommand().argv
