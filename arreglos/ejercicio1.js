let nota = [];

const agregarElementos = function () {
    nota.push(5);
    nota.push(10);
    console.log(nota.length);
}

const recorrerArreglo = function () {
    let notaObtenida;
    for (let indice = 0; indice < nota.length; indice++) {
        notaObtenida = nota[indice];
    }
}

const probarAgregar = function () {
    let notaRecuperada = recuperarFloat("txtNotas");
    agregarNota(notaRecuperada);
    console.log(notaRecuperada); 
}

const agregarNota = function (valorNotas) {
    nota.push(valorNotas);
    mostrarTextoEnCaja("txtNotas", " ");
}

const ejecutarPromedio = function () {
    let resultadoPromedio = calcularPromedio();
    mostrarTexto("lblPromedio", `El promedio es: ${resultadoPromedio}`);
}

const calcularPromedio = function () {
    let sumaNotas = 0;
    let promedio;

    for (let indice = 0; indice < nota.length; indice++) {
        sumaNotas = sumaNotas + nota[indice];
    }
    promedio = sumaNotas / nota.length;
    return promedio.toFixed(2);
}

const generarTabla = function(){
    let contenidoTabla = " ";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla+="<table><tr><td>UNO</td></tr>"+"<tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML=contenidoTabla;
}

const mostrarNotas = function(){
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NOTA</th></tr>"
    let miNota;
    for(let i=0;i<nota.length;i++){
        miNota= nota[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</tr></td>";
    }

    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;

}
