// ! tratamiento de objetos

const persona = {
    nombre: 'carlos',
    edad: 27,
    correo: 'jasplleida@gmail.com',
    subscripciones: {
    subcripcion: true,
    subscripcionCorreo: true},
    saludo: function () {
        console.log ('Hola desde dentro de una función!');

    }
};

const nombre = 'nombre';
//console.log(persona)
//console.log(persona.nombre)
console.log(persona[nombre])
persona.pais = 'españa'
console.log(persona)
console.log(persona.saludo())