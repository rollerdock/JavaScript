/*
🚀 Modificar estilos css mediante clases ```*/
// Obtener todos los elementos en el DOM
// var elementos = document.querySelectorAll('*')

//  Agregar un evento de clic a cada elemento
// elementos.forEach(function (elemento) {
// 	elemento.addEventListener('click', function () {
// 		 Obtener el nombre del elemento
// 		var nombreElemento = elemento.tagName
// 		nn = nombreElemento.split(',')
// 		console.log(nn[0])

// 		return nombreElemento
// 	})
// })
// nombreElemento.classList.add('activa')
let contador = 0
let contadorseg = 0
let contadorter = 0
let contadorco = 0

const primeraCaja = document.querySelector('.item1')
console.log(primeraCaja.classList)

const agregarClase = () => {
	primeraCaja.classList.add('activa')

	if (contador % 2 == 0 && contador != 0) {
		primeraCaja.classList.remove('activa')
	}
	contador = contador + 1
}

const eliminarClase = () => {
	primeraCaja.classList.remove('item1')
}
