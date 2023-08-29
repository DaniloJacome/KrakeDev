jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();//llamo a la funcion"LanzarDado"
    cambiarTexto("lblNumero",aleatorio);//imprimo el resultado
    if(aleatorio>3){
        aleatorio=("ES MAYOR A 3"+" "+ "GANASTE");
    }else{
        aleatorio=("ES MENOR A 3"+" "+"ESTAS DE MALAS");
    }
    let mensajeResultado=aleatorio;
    cambiarTexto("lblResultado",mensajeResultado);
}

//Crear una función llamada lanzar dado
//No recibe parámetros
//Retorna un número aleatorio entre 1 y 6
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random(); //entre 0 y 1
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado);
    valorDado=numeroEntero+1;//entre 0 y 6
    return valorDado;
}