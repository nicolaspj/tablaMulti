import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'; // Import hideBin correctly

export const argv = yargs(hideBin(process.argv))
            .option('b',{
                alias : 'base',
                type: 'number',
                demandOption :true,
                describe : 'Base de la tabla de Multiplicar',
            })
              .option('e',{
                alias : 'hasta',
                type: 'number',
                demandOption : true,
                describe : 'Numero hasta donde quieras la tabla'
            })
            .option('l',{
                alias : 'listar',
                type: 'boolean',
                demandOption :true,
                default : false,
                describe : 'Muestra las opciones en consola'
            })
            .check((argv,options) => {
                if( isNaN(argv.b)){
                    throw new Error('La base tiene que ser un entero');
                }
                return true;
            })
            .help()
            .alias('help','h')
            .argv;

