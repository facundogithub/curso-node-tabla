const fs = require('fs');
const crearArchivo = async ( base, listar = false, hasta) => {

    let salida = '';

    for (let i = 0; i < hasta; i++) {
        salida+=`${ base } x ${i+1} = ${ base * (i+1)}\n`;
    }

    try {
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    } catch ( error ) {
        throw error;
    }

    if (listar) {
        console.log(`----------------`);
        console.log('Tabla del: ',  base);
        console.log(`----------------`);
        console.log(salida);
    }

    return (`tabla-0${base}.txt`);

}

module.exports = {
    crearArchivo
}