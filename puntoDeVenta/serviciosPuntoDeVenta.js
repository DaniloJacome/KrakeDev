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
calcularTotal=function(subtotal,descuento,iva){
    let total;
    total=(subtotal-descuento)+iva
    return total;
}
