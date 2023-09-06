const obtenerAleatorio = function () {
    let aleatorio = parseInt(Math.random() * 3);
    valorEntero = aleatorio + 1;
    return valorEntero;
}

const generarElemento = function () {
    let generador;
    let cadenas = obtenerAleatorio();
    if (cadenas == 1) {
        generador = "Piedra";
    } else if (cadenas == 2) {
        generador = "Papel";
    } else if (cadenas == 3) {
        generador = "tijera";
    }
    return generador;
}

const determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    let resultado;
    if (eleccionJugador1 == 3 && eleccionJugador2 == 1) {
        cambiarTexto("lblResultado", "PERDISTE LA PARTIDA!!");
        resultado = "PERDISTE";
    } else if (eleccionJugador1 == 1 && eleccionJugador2 == 3) {
        cambiarTexto("lblResultado", "GANASTE LA PARTIDA!!");
        resultado = "GANASTE";
    } else if (eleccionJugador1 == 2 && eleccionJugador2 == 1) {
        cambiarTexto("lblResultado", "GANASTE LA PARTIDA!!");
        resultado = "GANASTE";
    } else if (eleccionJugador1 == 1 && eleccionJugador2 == 2) {
        cambiarTexto("lblResultado", "PERDISTE LA PARTIDA!!");
        resultado = "PERDISTE";
    } else if (eleccionJugador1 == 3 && eleccionJugador2 == 2) {
        cambiarTexto("lblResultado", "GANASTE LA PARTIDA!!");
        resultado = "GANASTE";
    } else if (eleccionJugador1 == 2 && eleccionJugador2 == 3) {
        puntoMaquina = puntoMaquina + 1;
        cambiarTexto("lblResultado", "PERDISTE LA PARTIDA!!");
        resultado = "PERDISTE";
    } else if (eleccionJugador1 == 1 && eleccionJugador2 == 1) {
        cambiarTexto("lblResultado", "EMPATE");
    } else if (eleccionJugador1 == 2 && eleccionJugador2 == 2) {
        cambiarTexto("lblResultado", "EMPATE");
    } else if (eleccionJugador1 == 3 && eleccionJugador2 == 3) {
        cambiarTexto("lblResultado", "EMPATE");
    }
    return resultado;
}

const generarRuta = function (nombre) {
    let valorMaquina;
    if (nombre == "tijera") {
        cambiarImagen("imgMaquina", "./imagenes/tijera.png");
        valorMaquina = 3;
    } else if (nombre == "Piedra") {
        cambiarImagen("imgMaquina", "./imagenes/piedra.png");
        valorMaquina = 1;
    } else if (nombre == "Papel") {
        cambiarImagen("imgMaquina", "./imagenes/papel.png");
        valorMaquina = 2;
    }
    return valorMaquina;
}