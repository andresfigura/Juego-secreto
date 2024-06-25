let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoAlemento(elemento, texto){
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;

};


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(numeroSecreto)
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoAlemento("p", `Acertaste el número en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`)
        document.getElementById("reiniciar").removeAttribute("disabled");    
    }else {
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoAlemento("p", "El número secreto es menor")        
        }else{
            asignarTextoAlemento("p", "El número secreto es mayor")        
        }
        intentos++;
        limpiarCaja();
    }  
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si, ya sorteamos todos los numeros???
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoAlemento('p','Ya se sortearon todos los números posibles')
    }else {
        //si el número generado está incluido en la lista, hacemos una operacion, de lo contrario no
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoAlemento("h1", "Juego del número secreto!");
    asignarTextoAlemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio
    //generar nuevamente el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled", "true");    
}
condicionesIniciales();
