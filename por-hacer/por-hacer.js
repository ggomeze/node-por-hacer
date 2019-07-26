//Logica de la aplicacion para guardar tareas

const fs = require('fs');

//Guardar notas en un array
let listadoTareas = [];

// Storing array of tasks in JSON file
const guardarDB = () => {
    let data = JSON.stringify(listadoTareas);


    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar');
        else console.log('Task added!');
    });
}

// Getting list of tasks from JSON in an array
const cargarDB = () => {
    //Check if file is not empty and valid
    try {
        listadoTareas = require('../db/data.json');
    } catch (error) {
        console.log('Error retrieving tasks from file');
        listadoTareas = [];
    }

}

// Creates a new task and store it in JSON file
const crear = (descripcion) => {
    cargarDB();

    let tarea = {
        descripcion,
        completado: false
    };

    listadoTareas.push(tarea);

    guardarDB();

    return tarea;
};

// Loads tasks from file
const getListado = () => {
    cargarDB();
    return listadoTareas;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoTareas.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoTareas[index].completado = completado;
        guardarDB();
        return true;
    } else
        return false;
}

const borrar = (descripcion) => {
    cargarDB();

    let numberOfTasksBefore = listadoTareas.length;

    listadoTareas = listadoTareas.filter((tarea) => {
        return tarea.descripcion !== descripcion;
    });

    if (listadoTareas.length < numberOfTasksBefore) {
        guardarDB();
        return true;
    } else
        return false;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}