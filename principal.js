const cursos = require('./datos');
const fs = require('fs');

const opciones = {
    id:{
        demand: true,
        alias: 'i'
    },
    nombre:{
        demand: true,
        alias: 'n'
    },
    cedula:{
        demand: true,
        alias: 'c'
    }
};

function listar(){
    console.log('-/-/-/-/-/-/-/-/-/-/-/-/-/-/\nEstos son los cursos disponibles:\n-----')
    setTimeout(function(){
        console.log(cursos.mostrar(cursos.curso[0]))
        setTimeout(function(){
            console.log(cursos.mostrar(cursos.curso[1]))
            setTimeout(function(){
                console.log(cursos.mostrar(cursos.curso[2]))
            },2000)
        },2000)
    },2000)
};

function saveFile(texto){
    fs.writeFile('matricula.txt',texto,(err)=>{
        if (err) throw (err);
        console.log('Se ha creado el archivo.')
    })
}

const argv = require('yargs')
.command('inscribir','Inscribirme en un curso',opciones)
.argv

if(argv.id){
    let busqueda = cursos.curso.find( matricula => matricula.id == argv.id)
    if(busqueda){
        texto = ('El estudiante ' + argv.nombre + '\nCon la cedula: ' + argv.cedula +
        '\nSe ha matriculado en el curso con ID ' + busqueda.id + ' de nombre ' +
        busqueda.nombre + ' que tiene una duracion de ' + busqueda.duracion +
        ' y un valor de ' + busqueda.valor);
        console.log('\nHa seleccionado el curso: ' + busqueda.nombre + '\n')
        saveFile(texto);
    }
    else{
        console.log('\nHa ingresado un ID que no corresponde a ningun curso.')
        listar();
    }
}
else{
    listar();
};