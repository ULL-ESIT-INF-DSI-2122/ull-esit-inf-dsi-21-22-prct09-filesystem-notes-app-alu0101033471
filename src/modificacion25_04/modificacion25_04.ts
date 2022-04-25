import fs from 'fs';
import {spawn} from 'child_process';
import  chalk from 'chalk';
class Cut{
    constructor(){}
    cut(){
        if(Number(process.argv[3]) === 0 || Number(process.argv[3]) > 3){
            console.error(chalk.red('No se puede filtrar por ese numero de campo !'));
            return 0;
        }
        if (fs.existsSync(`./src/modificacion25_04/${String(process.argv[2])}`)){
            console.log(chalk.green('Archivo existente!'));
        }else {
            console.error(chalk.red(`no existe el archivo`));
            return 0;
        }
        //console.log(`adioooos`,process.argv[3] );
        fs.watchFile(`./src/modificacion25_04/${String(process.argv[2])}`, (curr, prev) => {
            if (!fs.existsSync(`./src/modificacion25_04/${String(process.argv[2])}`)){
                console.error(chalk.red(`Archivo borrado`));
            return 0;
            }
            const cat = spawn('cat', ['-n', `./src/modificacion25_04/${String(process.argv[2])}`]);
            const cut = spawn('cut', [`--delimiter=,`,`-f`, `${process.argv[3]}`, `./src/modificacion25_04/${String(process.argv[2])}`]);
            cut.stdout.pipe(process.stdout);
            let cutOutput = '';
            let cutOutputAsArray: string[] = [];

            cut.stdout.on('data', (piece) => cutOutput += piece);
            cut.on('close', () => {
                 cutOutputAsArray = cutOutput.split(/\s+/);
                 console.log(cutOutputAsArray);
              }); 
            });
    }
}

const cortar = new Cut();
cortar.cut();
