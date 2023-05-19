
const colores = ['Rojo','Verde','Azul'];

console.log(colores);
console.log(colores.length);

//! .toString nos permite parsear a string

document.body.innerHTML = '<br>' + colores.toString() + '<br><br>';
console.log(colores.join('- -'));

const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
const diasEliminado = dias.shift();
console.log(dias);
console.log(diasEliminado);

//! .unshift() agrega un elemento al inicio y empuja los elementos

dias.unshift('Lunes');

console.log(dias);

//! .splice() Agrega elemento donde queramos
//* 1er parametro - Posición donde insertar
//* 2o parametro - si queremos eliminar elementos desde la posición indicada
//* Resto de parametros - los elementos a insertar

const amigos = ['Alejandro','Cesar','Manuel'];
amigos.splice(1,1,'Gustabo','Sandra');
console.log(amigos);

//! .slice() Nos permite copiar parte de un arreglo
//* 1er parametro - posición desde donde quieres copiar
//* 2o parametro - Hasta antes de que elemento copiar

const frutas = ['Fresa','Manzana','Uva','Piña','mango','Naranja','Melón'];
const frutasFavoritas = frutas.slice(1,6);
console.log(frutasFavoritas);









