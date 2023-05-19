var numero = 1; //! esta variable es Global, pero no se usa porque dentro de las 
//! funciones ya hay una variable local que se llama numero
var obtenerNumeroDeLetras = (nombre) => {
var numero = nombre.length;
console.log(`${nombre} tiene ${numero} Letras`);
var anidada = () => {
    console.log(numero);
    
    };
anidada();
};


obtenerNumeroDeLetras('Alejandro');