calcularPromedioNotas = function(){
    let primeraNota=recuperarFloat("txtPrimeraNota");
    let segundaNota=recuperarInt("txtSegundaNota");
    let TerceraNota=recuperarInt("txtTerceraNota");
    let valorResultado=primeraNota+segundaNota+TerceraNota;
    let valorPromedio=calcularPromedio(valorResultado);
    calcularResultado("lblSubtotal",valorResultado); 
    mostrarTexto("lblTotal",valorPromedio);

    let imagenElemento = document.getElementById("imagenMostrada");
        if (valorPromedio>7) {
            imagenElemento.src = "./imagenes/exito.gif"; 
        } else {
            imagenElemento.src = "./imagenes/fracaso.gif";
        }
}
calcularPromedio=function(){
    let n1;
    let n2;
    let n3;
    let resultadoSuma;
    let resultadoEntero;
    let promedio;
    resultadoSuma=n1+n2+n3;
    resultadoEntero=parseFloat(resultadoSuma);
    promedio=resultadoEntero/3;
    return promedio
}
imagenResultado=function(){

    return valorDado;
}
