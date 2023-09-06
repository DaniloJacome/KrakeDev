let puntoUsuario = 0;
let puntoMaquina = 0;
const jugar = function (seleccionado) {
    let valorUsuario;
    let seleccionadoMaquina;
    let valorMaquina;
    let ganador;
    if (seleccionado == 2) {
        cambiarImagen("imgUsuario", "./Imagenes/papel.png");
        valorUsuario = 2;
        seleccionadoMaquina = generarElemento();
        valorMaquina = generarRuta(seleccionadoMaquina);
        ganador = determinarGanador(valorUsuario, valorMaquina);
    } else if (seleccionado == 1) {
        cambiarImagen("imgUsuario", "./Imagenes/piedra.png");
        valorUsuario = 1;
        seleccionadoMaquina = generarElemento();
        valorMaquina = generarRuta(seleccionadoMaquina);
        ganador = determinarGanador(valorUsuario, valorMaquina);
    } else if (seleccionado == 3) {
        cambiarImagen("imgUsuario", "./Imagenes/tijera.png");
        valorUsuario = 3;
        seleccionadoMaquina = generarElemento();
        valorMaquina = generarRuta(seleccionadoMaquina);
        ganador = determinarGanador(valorUsuario, valorMaquina);
    }

    if (ganador == "PERDISTE") {
        puntoMaquina = puntoMaquina + 1;
        cambiarTexto("lblResultadoMaquina", puntoMaquina);
    } else if (ganador == "GANASTE") {
        puntoUsuario = puntoUsuario + 1;
        cambiarTexto("lblResultadoUsuario", puntoUsuario);
    }
}
