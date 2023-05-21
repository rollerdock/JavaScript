function recursive(n) {
    if (n === 0) {
      return 0;
    } else {
      return n + recursive(n - 1); 
    };
  };

let resultado = recursive(3);

console.log(resultado);
