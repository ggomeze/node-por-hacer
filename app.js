//Requires
const colors = require('colors');

//Destructuracion
const { argv } = require('./config/yargs'); //Only import this object
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer'); //Only import this object

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear tarea por hacer');
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        let result = actualizar(argv.descripcion, argv.completado);
        console.log(`Se actualizo la tarea?: ${result}`);
        break;
    case 'listar':
        console.log('Mostrar todas las tareas por hacer');
        let listado = getListado();
        console.log('=============== Por Hacer ==============='.green);
        for (const tarea of listado) {
            console.log(`Description: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.completado}`);
            console.log('----------------------------------------'.gray);
        }
        console.log('========================================='.green);
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido');
        break;
}