//require
const descripcion = {
    demand: true,
    alias: 'd',
    des: 'Descripción de la tarea por hacer'
};

const completado = {
    demand: false,
    alias: 'c',
    default: true,
    des: 'Marca como completado o pendiente'
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', descripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('listar', 'lista el numero de tareas')
    .command('borrar', 'Borra la/s tareas', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}