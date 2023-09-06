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

buscarLetra = function(cadena,letra){
    let letraIterada;
    let existeLetra=false;
    for(let i=0;i<cadena.length;i++){
        letraIterada=cadena.charAt(i);
        if(letraIterada==letra){
            existeLetra=true;
        }
    }
    if(existeLetra==true){
        return true;
    }else{
        return false;
    }
}

contarMayusculas = function(cadena){
    let letra;
    let contadorMayusculas;
    for(let i=0;i<cadena.length;i++){
        letra=cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas=contadorMayusculas+1;
        }
    }
    console.log(contadorMayusculas);
}