import  chalk from 'chalk';
import yargs from 'yargs';
import fs from 'fs';
import path from 'path';
/**
 * Comando add que añade una nota
 */
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

/**
 * Comando list que lista las notas de un usuario
 */
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
  handler(argv) {
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

/**
 * comando read que lee una nota de un usuario
 */
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
/**
 * Comando remove que elimina una nota de un usuario
 */
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
/**
 * Comando modidy que modifica el contenido y color de una nota
 */
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

yargs.parse();