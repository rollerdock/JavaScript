const fetchPost = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const posts = ["Post1", "Post2", "Post3"];
			const error = true;

			if (error) {
				reject("Hubo un error al intentar recuperar post");
			} else {
				resolve(posts);
			}
		}, 2000);
	});
};

fetchPost()
	.then((post) => {
		console.log(post);
	})
	.catch((error) => {
		console.log(error);
	});

//! const fetchPost = () => {return new Promise((resolve,reject)=>{
//!  Aquí hacemos la petición de lo que sea  }) }

//! Y ahora le ponemos el codigo para recibir el contenido si todo a ido bien
//! con el .then así fetchPost().then((post)=>{console.log(post);});
//* En resumen, se define la promesa y se termina con .then y .cath
