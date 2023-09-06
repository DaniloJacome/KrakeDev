ejecutarPrueba1 = function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena = function(cadena){
    let caracter;
    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
    }

}

recorrerCadenaInvertida = function(cadena) {
    let cadenaInvertida = "";
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        let caracter = cadena.charAt(posicion);
        cadenaInvertida += caracter;
    }
    mostrarTexto("resultado",cadenaInvertida);
}

ejecutarPrueba2 = function() {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadenaInvertida(mensaje);
}