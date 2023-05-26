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

const mostrarPost = async () => {
	try {
		const posts = await fetchPost();
		console.log(posts);
	} catch (error) {
		console.log(error);
	}
};

mostrarPost();
