import  chalk from 'chalk';
import yargs from 'yargs';
import fs from 'fs';

/**
 * Clase Remove que contiene un método para borrar notas
 */
export class Remove {
  constructor(){}

  /**
  * Método removeNote que elimina una nota de un usuario
  */
  removeNote(){
    yargs.command({
      command: 'remove',
      describe: 'Remove the notes of the user',
      builder: {
        title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string',
        },
        user: {
          describe: 'Name user',
          demandOption: true,
          type: 'string',
        }
      },
      handler(argv) {
        if (!fs.existsSync(`./dist/${String(argv.user)}/${String(argv.title)}.json`)){
          console.error(chalk.red(`No note found`));
        } else {
          fs.unlinkSync(`./dist/${String(argv.user)}/${String(argv.title)}.json`);
          console.log(chalk.green(`Note ${String(argv.title)} removed!`));
        }  
      },
    });
  }
}