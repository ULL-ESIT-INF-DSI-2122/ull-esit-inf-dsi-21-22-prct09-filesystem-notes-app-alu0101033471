import  chalk from 'chalk';
import yargs from 'yargs';
import fs from 'fs';

/**
 * Clase Read que contiene un método para leer notas
 */
export class Read {
  constructor(){}

  /**
  * Método readNote que lee una nota de un usuario
  */
  readNote(){
    yargs.command({
      command: 'read',
      describe: 'Read the notes of the user',
      builder: {
        user: {
          describe: 'Name user',
          demandOption: true,
          type: 'string',
        },title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string',
        }
      },
      handler(argv) {
        if (!fs.existsSync(`./dist/${String(argv.user)}`)){
          console.error(chalk.red(`${argv.user} does not exists`));
        }
        if (!fs.existsSync(`./dist/${String(argv.user)}/${String(argv.title)}.json`)){
          console.error(chalk.red(`The note ${String(argv.title)} does not exists`));
        } else {
          let jsonData = require(`./${String(argv.user)}/${String(argv.title)}.json`);
          console.log(chalk[`${jsonData.color}`](jsonData.title));
          console.log(chalk[`${jsonData.color}`](jsonData.body));
        }
      },
    });
  }
}