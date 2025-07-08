import  { crearArchivo }  from './helpers/multiplicar.js';
import { argv } from './config/yargs.js';

console.clear();
console.log(argv);


crearArchivo( argv.b, argv.l , argv.e )
    .then(nombreArchivo => console.log(nombreArchivo , 'creado'))
    .catch( err => console.log(err));


