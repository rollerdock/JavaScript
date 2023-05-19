
// ! block scope
//* pertenecen las variables declaradas con const o let dentro de un bloque {}
//! - Solo podemos acceder a ellas dentro del bloque.

const edad = 19;
if (edad >18){
    const accessPermitido= true;
    console.log(accessPermitido);
    
}

//! console.log(accessPermitido); Esto dará error, la variable está fuera de alcance.S
