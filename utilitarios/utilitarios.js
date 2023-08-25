//Crear funcion "rutaImagen" contenido en pantalla
mostrarImagen=function(idComponente,rutaImagen){
    let componente
    componente=document.getElementById(idComponente);
    componente.src=rutaImagen;
}
//Crear funcion "mostrarTexto" contenido en pantalla
mostrarTexto=function(idComponente,mensaje){
    let componente
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}
//Mostrar/Limpiar texto en cajas
mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente
    componente=document.getElementById(idComponente);
    componente.value=mensaje;
}
//recuperamos la funcion
recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}
recuperarInt=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero;
}
recuperarFloat=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorFlotante=parseFloat(valorCaja);
    return valorFlotante;
}