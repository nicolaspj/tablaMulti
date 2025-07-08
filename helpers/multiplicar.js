import fs from 'fs/promises';
import colors from 'colors';
export const crearArchivo = (base = 5 , listar = false , hasta = 20) => {
    return new Promise((resolve, reject) => {
         
        let salida = '';
        let consola = ''
        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.bgBlue} ${i} ${'='.bgGreen} ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if (listar){
        console.log('=========');
        console.log(' Tabla del ', base);
        console.log('=========');
        console.log(consola);
        }   

        fs.writeFile(`./salidas/tabla-${base}.txt`, salida)
            .then(() => {
                resolve(`\n tabla-${base}.txt creado`);
            })
            .catch(err => {
                reject(err);
            });
    });
};



/*con async o await*/
/*
const crearArchivo = async(base = 5) =>{ 
    try{
    return new Promise( (resolve ,reject) =>{ 
    console.log('=========');
    console.log(' Tabla del ', base );
    console.log('=========');

    let salida = '';
    
    for (let i = 1 ; i <=10 ; i++){    
        salida += `${base} x ${ i } = ${ base * i}\n`;
    }
    console.log(salida);

    fs.writeFileSync( `tabla-${base}.txt`, salida );
    resolve `tabla-${base}.txt`;
    })
    } catch (err){
        throw err;
    }
}
*/
// Exportar la función correctamente
