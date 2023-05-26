const recuperarDatosservidor = () => {
	//Definir promesa => hacer petición = definir que pasa si exito/error

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const datos = [200, 300, 400, 32, 12, 23];
			const error = true;

			if (error) {
				reject("cagon sus muelas");
			} else {
				resolve(datos);
			}
		}, 4000);
	});
};
recuperarDatosservidor();

recuperarDatosservidor()
	.then((datos) => {
		console.log(datos);
	})
	.catch((error) => {
		console.log(error);
	});
