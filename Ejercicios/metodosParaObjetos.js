const usuario = {
    nombre: 'Carlos',
    edad: 27,
    amigos: ['Alejandro','Cesar','Manuel'],
    saludo: () => {
        console.log('Hola!');
        
    },

};

usuario.saludo();

//! Object.Keys()
//* Nos devuelve un arreglo con las llaves (KEYS) del objeto.

//* const resultados = Object.keys(usuario);
//* console.log(resultados);

//* const resultados = Object.values(usuario);
//* console.log(resultados);

const resultados = Object.entries(usuario);
console.log(resultados);
