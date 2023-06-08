const yargs = require('yargs')
const controller = require('./commands/controller')
const credential = require('./commands/credential')
const presentation = require('./commands/presentation')

yargs.scriptName('✨')
yargs.command(...controller)
yargs.command(...credential)
yargs.command(...presentation)
yargs.help().alias('help', 'h').demandCommand().argv
