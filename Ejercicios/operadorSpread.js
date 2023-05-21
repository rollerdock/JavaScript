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

const regitrarUsuario (nombre,correo, ...datosAdicionales) => {
    console.log(nombre,correo);
};

regitrarUsuario('Carlos','correo@gmail.com');
regitrarUsuario('alejandro','alex@correo.com',28,'España');