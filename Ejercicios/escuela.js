class Profesor {
	constructor(nombre, apellido) {
		this.nombre = nombre;
		this.apellido = apellido;
	}

	devuelveNombre() {
		console.log(this.nombre, this.apellido);
	}
}

class Director extends Profesor {
	constructor(nombre, apellido, expulsar) {
		super(nombre, apellido);
		this.expulsar = expulsar;
	}

	expulsaAlumno(id) {
		if (dire.expulsar == "expulsar") {
			console.log(`El alumno ${id} ha sido expulsado`);
		} else {
			console.log("no tienes permisos");
		}
	}
}
const prof1 = new Profesor("toni", "salguero");
const dire = new Director("pepe", "rubianes", ["expulsar"]);

console.log(prof1.nombre, prof1.apellido);

console.log(dire.expulsaAlumno(2));
// console.log(prof1.expulsaAlumno(3)); //* fallará porque profesor no tiene "expulsar"
