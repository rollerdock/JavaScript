const operacion = (tipo,numero1,numero2)=> {
    let result=0;
    if (tipo==='suma'){ result = (numero1+numero2)};  
    if (tipo==='resta'){ result = (numero1-numero2)};  
    return result;
};

console.log(operacion('resta',6,2));

