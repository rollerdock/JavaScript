const retorno = () => {
	return new Promise((resolve, reject) => {
		const datos = [1, 2, 3, 4, 5];
		const error = true;

		setTimeout(() => {
			if (error) {
				reject("cagon sus muelas");
			} else {
				resolve(datos);
			}
		}, 2000);
	});
};

retorno();

retorno()
	.then((datos) => {
		console.log(datos);
	})
	.catch((error) => {
		console.log(error);
	});
