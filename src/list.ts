import  chalk from 'chalk';
import yargs from 'yargs';
import fs from 'fs';

/**
 * Clase List que contine un método que lista las notas de un usuario
 */
export class List {
  constructor(){}

  /**
  * Método listNote que lista las notas de un usuario
  */
  listNote(){
    yargs.command({
      command: 'list',
      describe: 'List the notes of the user',
      builder: {
        user: {
          describe: 'Name user',
          demandOption: true,
          type: 'string',
        }
      },
      /**
       * Método para capturar asignaciones de valor
       * @param argv argumento pasado por parametro
       */
      handler(argv) {
        /**
         * Método para poder leer un directorio y si existe listarlo
         */
        fs.readdir(`./dist/${String(argv.user)}`, (err, files) =>  {
          if(err){
            console.error(chalk.red(`${argv.user} does not exists`));
          } else {
            let i:number = 0;
            files.forEach(file => {
              let jsonData = require(`./${String(argv.user)}/${String(file)}`);
              console.log(chalk[`${jsonData.color}`](String(jsonData.title)));
              i++;
            });
            if(i === 0){
              console.error(chalk.red(`${argv.user} hasn't got notes`));
            }
          }
        });
      },
    });
  }
}