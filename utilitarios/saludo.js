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
    //Mostar/limpiar texto en caja Nombre
    mostrarTextoEnCaja("txtNombre","");
} 
