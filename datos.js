let curso = [{
    id: 1,
    nombre: 'Curso Node.js',
    duracion: 32,
    valor: 0
},
{
    id: 2,
    nombre: 'Ingles',
    duracion: 64,
    valor: 200000
},
{
    id: 3,
    nombre: 'Frances',
    duracion: 48,
    valor: 350000   
}];

let mostrar = (matricula,callback) => {
    return ('ID: ' + matricula.id + '\nNombre: ' + matricula.nombre
    + '\nDuracion: ' + matricula.duracion + '\nValor: ' + matricula.valor
    + '\n-----');

}



module.exports = {
    curso,
    mostrar
};