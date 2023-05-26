class Usuario {
  tipo = "usuario";

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;

    console.log("nuevo usario registrado");
  }

  obtenernombreCompleto() {
    console.log("Obteniendo datos");
    return `${this.nombre} ${this.apellido}`;
  }
}

const usuario = new Usuario("Carlos Aturo", "Esparza");
const usuario2 = new Usuario("miguel muro", "España");

console.log(usuario2.obtenernombreCompleto());
