// setTimeout(() => {
//     console.log("hola")
// }, 5000)

function saludare() {
    console.log("hola holita")
}

let id

function saluda() {
    id = setTimeout(saludare, 2000)
}

const para = () => {
    console.log("Se ha detenido!")
    clearTimeout(id)
}
