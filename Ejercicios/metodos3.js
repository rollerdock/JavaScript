//! .find()
//* Nos permite recorrer un arreglo y devuelve el primer elmento que retornaremos

const nombre = ['Carlos','Rafael','Estefania','Rodrigo','Rafael','Gema','Diana','Sara']

//* const resultado = nombre.find((nombre) => {
//*     if (nombre[0]=== 'E') {
// *        return nombre;
//* }
//* });
//* console.log(resultado);

//! .map()
//* nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
//* en base a los resultados de esa función.

//! se puede hacer en uns sola linea más eficiente
// const nombresMayusculas = nombre.map((nombre) => {
// return nombre.toUpperCase();

// });

const nombresMayusculas = nombre.map((nombre) => nombre.toUpperCase());
console.log(nombresMayusculas);

//! .filter()
//* Nos permite ejecutar una función por cada elemento y luego crear 
//* un arreglo en base a los resultados de esa función.

const nombre4letras = nombre.filter((nombre) => nombre.length===4);
console.log(nombre4letras);

