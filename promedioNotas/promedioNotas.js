calcularPromedioNotas = function(){
    let primeraNota=recuperarFloat("txtPrimeraNota");
    let segundaNota=recuperarFloat("txtSegundaNota");
    let TerceraNota=recuperarFloat("txtTerceraNota");
    let valorResultado=primeraNota+segundaNota+TerceraNota;
    let valorPromedio=calcularPromedio(valorResultado);
    mostrarTexto("lblSubtotal",valorResultado); 
    mostrarTexto("lblTotal",valorPromedio);

    let imagenElemento = document.getElementById("imagenMostrada");
        if (valorPromedio>7) {
            imagenElemento.src = "./imagenes/exito.gif"; 
        } else {
            imagenElemento.src = "./imagenes/fracaso.gif";
        }
}

