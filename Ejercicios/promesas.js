const promesa = new Promise((resolve, reject) => {
	// Acción que se ejecuta

	setTimeout(() => {
		const exito = false;

		if (exito) {
			resolve("Ok la operación tuvo exito");
		} else {
			reject("Fallo la operación");
		}
	}, 4000);
});

promesa.then((mensaje) => {
	alert(mensaje);
});

promesa.catch((mensaje) => {
	alert(mensaje);
});
