calcularResultado=function(idComponente,valorResultado){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=valorResultado; 
}
calcularPromedio=function(resultado){
    let promedio;
    promedio=(resultado/3)
    valorFormateado=promedio.toFixed(2);
    return valorFormateado;
    
}


