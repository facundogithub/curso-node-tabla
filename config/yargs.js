const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base a usar para multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla por consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indice maximo'
    })
    .check( (argv, options) => {
        if (isNaN( argv.b) ) {
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .argv;

module.exports = argv;