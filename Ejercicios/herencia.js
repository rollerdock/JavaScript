class Usuario {
	constructor(usuario, password) {
		this.usuario = usuario;
		this.password = password;
		console.log("nuevo usuario creado!");
	}

	obtenerPost() {
		const posts = ["post1", "post2"];
		return posts;
	}
}

class Moderador extends Usuario {
	constructor(usuario, password, permisos) {
		super(usuario, password);
		this.permisos = permisos;
	}

	borrarPost(id) {
		if (this.permisos.includes("borrar")) {
			console.log(`El post ${id} ha sido borrado`);
		} else {
			console.log("No tienes los permisos para borrar post!");
		}
	}
}
const usuario = new Usuario("Carlos", "125");

console.log(usuario.obtenerPost());

const usuario2 = new Moderador("Arturo", "456", ["editar"]);
console.log(usuario2.obtenerPost());
console.log(usuario2.borrarPost(3));
