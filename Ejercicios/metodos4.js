//! .includes()
//* Nos permite saber si el arreglo contiene un elemento especificado


const nombre = ['Carlos','Rafael','Estefania','Rodrigo','Rafael','Gema','Diana','Sara']

console.log(nombre.includes('Carlos'));

//! .every()
//* Nos permite ejecutar un condicional sobre cada elemento y
//* nos devuelve true si TODOS los elementos cumplieron la condición

//* const todosLosElementosValidos = nombre.every((nombre)=> {
//*     if(typeof nombre === 'string'){
//*         return true;
//*     }else {
//*         return false;
//*     }
//* });

//* console.log(todosLosElementosValidos);

//! .some()
//* Nos permite ejecutar un condicional sobre cada elemento y
//* nos devuelve true si algun elemento cumplio la condicion


const nombresValidos = nombre.some((nombre)=> {
    if(typeof nombre !== 'string'){
        return true;
    }else {
        return false;
    }
});

console.log('Hay algún elemento invalido:' + nombresValidos);
