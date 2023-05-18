const usuario = {

    edad: 18,
    pais:"mexico",
    ticket: false
};

if (usuario.edad>18 && usuario.ticket){
    console.log('El usuario es mayor de edad y puede entrar');
    
    }
    else if (usuario.edad>17 && !usuario.ticket){

        console.log('No puede entrar porque no tiene ticket');
    
    }
    else if (usuario.edad<18 && !usuario.ticket)
        {console.log('Es menor de edad y no puede entrar');
    }else {

        console.log('No cumple las condiciones anteriores');
        
    }

