//! Operador Spread
//* Permite tomar elementos de un arreglo u objeto y expandirlos
//* en otro sitio

// const frutas = ["Manzana", "Pera", "Piña", "Melon"];
// const comidaFavorita = ["Piza", "shuhi", ...frutas];

// console.log(comidaFavorita);

// const usuario = {
//   nombre: "carlos",
//   edad: 27,
// };

// const datosLogin = {
//   nombre: "arturo",
//   correo: "arturo@gmail.com",
//   password: "123",
//   ...usuario,
// };

// console.log(datosLogin);

//! Parametros Rest "..."
//* Permite que una función contenga un número indefinido
//* de argumentos.Los argumentos extra los convertirá en
//* un arreglo.

// const regitrarUsuario = (nombre, correo, ...datosAdicionales) => {
//   console.log(nombre, correo, datosAdicionales);
// };

// regitrarUsuario(
//   "Carlos",
//   "correo@gmail.com",
//   28,
//   "España",
//   "hombre",
//   "1.80",
//   true,
//   43,
//   "socio"
// );
// regitrarUsuario(
//   "alejandro",
//   "alex@correo.com",
//   28,
//   "España",
//   "hombre",
//   "1.80",
//   true,
//   43,
//   "socio"
// );

//! Destructuración de objetos
//* nos permite obtener elementos de un arreglo y guardarlo en variable

const amigos = ["Alejandro", "Cesar", "Manuel"];
// const primerAmigo = amigos[0];
// const segundoAmigo = amigos[1];
const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(primerAmigo);

const persona = {
  nombre: "alejandro",
  correo: "alex@correo.com",
  edad: 28,
  pais: "España",
  sexo: "hombre",
  altura: "1.80",
  alta: true,
  peso: 43,
  socio: "socio",
};

console.log(persona.nombre, persona.pais);

const mostrarEdad = ({ nombre, edad }) => {
  //* ({ nombre, edad }) entre llaves para seleccionar los valores del objeto.
  console.log(nombre, edad);
};

mostrarEdad(persona); //* le paso el objeto entero
