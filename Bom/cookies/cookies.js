let contenido
let usuario
let pass
let newuser
let newpass
let newcontenido
let cookieArray
let acces

const crea = () => {
    contenido = document.cookie = `usuario=${usuario};pass=${pass}`
    cookieArray = contenido.split(";")
    return cookieArray
}

const iniciar = () => {
    usuario = prompt("Introduce usuario: ")
    pass = prompt("Introduce pass: ")
    crea()
    return usuario, pass
}

const comprobar = () => {
    newuser = prompt("Introduce usuario:")
    newpass = prompt("Introduce pass:")
    if (
        cookieArray[0] == `${"usuario="}${newuser}` &&
        cookieArray[1] == `${"pass="}${newpass}`
    ) {
        acces = true
        acceso()
    } else {
        acceso()
    }
}

const muestraCookie = () => {
    console.log("cookie user : ", usuario)
    console.log("cookie pass : ", pass)
    console.log(`new user : (${"user="}${newuser})`)
    console.log(`new pass : (${"pass="}${newpass})`)
}

const acceso = () => {
    if (acces == true) {
        document.write("<h1>Acceso permitido</h1>")
    } else {
        document.write("<h1>Acceso Denegado</h1>")
    }
}
