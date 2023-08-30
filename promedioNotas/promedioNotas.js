calcularPromedioNotas = function(){
    let primeraNota=recuperarFloat("txtPrimeraNota");
    let segundaNota=recuperarInt("txtSegundaNota");
    let TerceraNota=recuperarInt("txtTerceraNota");
    let valorSubtotal=primeraNota+segundaNota+TerceraNota;
    calcularSubTotal("lblSubtotal",valorSubtotal); 
    
    
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
