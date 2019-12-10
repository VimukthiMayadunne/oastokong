import {Command, flags} from '@oclif/command'
const readSwagger = require('./swaggerYamal')

class Oastokong extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Oastokong)

    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/index.ts`)
    
    var rslt = readSwagger.main();
    console.info(rslt);
  }
}

export = Oastokong
