calcularTotal=function(subtotal,descuento,iva){
    let total;
    total=(subtotal-descuento)+iva
    return total;
}
calcularSubTotal=function(idComponente,valorSubtotal){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=valorSubtotal; 
}
calcularValorDescuento=function(idComponente,valorDescuento){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=valorDescuento;   
}
