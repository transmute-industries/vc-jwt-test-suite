const yargs = require("yargs");
const cli = require("./cli");
const credential = require('./commands/credential')
yargs.scriptName("✨");

yargs.command(...credential);

yargs.command(
  "presentation [action]",
  "verifiable presentation",
  {
    input: {
      alias: "i",
      description: "Path to input document",
      demandOption: true,
    },
    output: {
      alias: "o",
      description: "Path to output document",
      demandOption: true,
    },
    key: {
      alias: "k",
      description: "Path to key",
    },
  },
  async (argv) => {
    if (argv.action === "create") {
      await cli.createVerifiablePresentation({
        input: argv.input,
        output: argv.output,
        format: argv.format,
        key: argv.key,
      });
    }
    if (argv.action === "verify") {
      await cli.verifyVerifiablePresentation({
        input: argv.input,
        output: argv.output,
        format: argv.format,
      });
    }
  }
);


yargs.help().alias("help", "h").demandCommand().argv;