calcularPromedioNotas = function(){
    let primeraNota=recuperarFloat("txtPrimeraNota");
    let segundaNota=recuperarFloat("txtSegundaNota");
    let TerceraNota=recuperarFloat("txtTerceraNota");
    let valorResultado=primeraNota+segundaNota+TerceraNota;
    let valorPromedio=calcularPromedio(valorResultado);
    mostrarTexto("lblSubtotal",valorResultado); 
    mostrarTexto("lblTotal",valorPromedio);

    let imagenElemento = document.getElementById("imagenMostrada");
        if (valorPromedio<5 && valorPromedio>0) {
            imagenElemento.src = "./imagenes/reprobado.gif";
            mostrarTexto("lblMensaje","REPROBADO");
        } else if(valorPromedio>=5 && valorPromedio<=8){
            imagenElemento.src = "./imagenes/buenTrabajo.gif";
            mostrarTexto("lblMensaje","BUEN TRABAJO");
        } else if(valorPromedio>8 && valorPromedio<=10){
            imagenElemento.src = "./imagenes/excelente.gif";
            mostrarTexto("lblMensaje","EXCELENTE");
        }else{
            imagenElemento.src = "./imagenes/error.gif";
            mostrarTexto("lblMensaje","DATOS INCORRECTOS");
        }
}

