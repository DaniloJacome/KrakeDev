calcularValorDescuento=function(idComponente,valorDescuento){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=valorDescuento;   
}
calcularValorIva=function(idComponente,valorIVA){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=valorIVA; 
}
calcularSubTotal=function(idComponente,valorSubtotal){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=valorSubtotal; 
}
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