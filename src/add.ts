import  chalk from 'chalk';
import yargs from 'yargs';
import fs from 'fs';
import path from 'path';

/**
 * Clase Add que contiene un método para añadir notas 
 */
export class Add {
  constructor(){}

  /**
  * Método addNote que añade una nota
  */
  addNote(){
    yargs.command({
      command: 'add',
      describe: 'Add a new note',
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
        if (!fs.existsSync(`./dist/${String(argv.user)}`)){
          fs.mkdir(path.join(__dirname, String(argv.user)), (err) => {
            if (err) {
              return console.error(chalk.red(err));
            }
          });
        }
        if (fs.existsSync(`./dist/${argv.user}/${argv.title}.json`)){
          console.error(chalk.red('Note title taken!'));
        }
        else{
          let info = {
            title: String(argv.title),
            body: String(argv.body),
            color: argv.color
          };
          let data = JSON.stringify(info, null, 2);
          setTimeout(() => {
            fs.writeFile(`./dist/${argv.user}/${argv.title}.json`, data, (err) => {
              if (err) {
                return console.error(chalk.red(err));
              }
              else{
                console.log(chalk.green(`New note added!`));
              }
            });
          }, 1000);
        }
      },
    });
  }
}