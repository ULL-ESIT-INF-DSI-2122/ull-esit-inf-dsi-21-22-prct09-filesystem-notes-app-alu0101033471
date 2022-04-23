import  chalk from 'chalk';
import yargs from 'yargs';
import fs from 'fs';

/**
 * Clase Modify que contine un método que modifica las notas de un usuario
 */
export class Modify {
  constructor(){}

  /**
  * Método modifyNote que modifica las notas de un usuario
  */
  modifyNote(){
    yargs.command({
      command: 'modify',
      describe: 'modify a note',
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
        },
        body: {
          describe: 'Body of the note',
          demandOption: true,
          type: 'string',
        },
        color: {
          describe: 'Color of the letters',
          demandOption: true,
          type: 'string',
        }
      },
      handler(argv) {
        if (!fs.existsSync(`./dist/${String(argv.user)}/${String(argv.title)}.json`)){
          console.error(chalk.red(`No note found`));
        }
        else{
          let info = {
            title: String(argv.title),
            body: String(argv.body),
            color: argv.color
          };
          let data = JSON.stringify(info, null, 2);
            fs.writeFile(`./dist/${argv.user}/${argv.title}.json`, data, (err) => {
              if (err) {
                return console.error(chalk.red(err));
              }
              else{
                console.log(chalk.green(`Modified note!`));
              }
            });
        }
      },
    });
  }
}