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