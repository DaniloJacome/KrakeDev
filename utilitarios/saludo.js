saludar=function(){
    //recuperar el valor de la caja de texto txtNombre
    let nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtNombre
    let apellido=recuperarTexto("txtApellido");
    //recuperar el valor de la caja en Int y Float
    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura");
    //Crear,"mostrarTexto" funcion imprimir contenido en pantalla
    let mensajeBienvenida="Bienvenido "+nombre+" "+apellido;
    mostrarTexto("lblResultado",mensajeBienvenida);
     //Crear,"rutaImagen" funcion imprimir contenido en pantalla
    mostrarImagen("imgSaludo","./imagenes/saludo.gif");
} 
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