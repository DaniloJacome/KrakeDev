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
calcularValorTotal=function(idComponente,valorTotal){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=valorTotal; 
}
