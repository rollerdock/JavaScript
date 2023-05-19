//! .indexOf()
//* Obtenemos el primer index de un elemento
//* Si no hay elementos nos retorna -1

const nombre = ['Carlos','Rafael','Estefania','Rodrigo','Rafael','Gema','Diana','Sara']
console.log(nombre.indexOf('Estefania'));

//! .lastIndexOf()
//* Obtenemos el último index de un elemento

console.log(nombre.lastIndexOf('Rafael'));

//! .forEach()
//* Nos permite ejecutar una función por cada elemento

nombre.forEach((nombre,index) => {
    console.log(`(${index}) - Hola ${nombre} `);
    
});



