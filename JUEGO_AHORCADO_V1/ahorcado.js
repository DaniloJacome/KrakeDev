let palabraSecreta;
const esMayuscula = function (caracter) {
    if (caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90) {
        return true;
    } else {
        return false;
    }
}

const guardarPalabra = function () {
    let letra;
    let contadorMayuscula = 0;
    let palabra = recuperarTexto("txtSecreta");
    if (palabra.length == 5) {
        for (let i = 0; i <= palabra.length - 1; i++) {
            letra = palabra.charAt(i);
            if (esMayuscula(letra)) {
                contadorMayuscula = contadorMayuscula + 1;
            }
        }
        if (contadorMayuscula != 5) {
            alert("todo las palabras debe ser mayuscula");
        } else {
            palabraSecreta = palabra;
            console.log(palabraSecreta);
        }
    } else {
        alert("DEBE TENER 5 LETRAS");
    }
}

const mostrarLetra = function (letra, posicion) {
    if (posicion == 1) {
        mostrarTexto("div0", letra);
    } else if (posicion == 2) {
        mostrarTexto("div1", letra);
    } else if (posicion == 3) {
        mostrarTexto("div2", letra);
    } else if (posicion == 4) {
        mostrarTexto("div3", letra);
    } else if (posicion == 5) {
        mostrarTexto("div4", letra);
    }
}

const validar = function (letra) {
    let caracter;
    let letraEcontrada = 0;
    let valido;
    posicion = palabraSecreta.length - 1;
    for (let i = 0; i <= posicion; i++) {
        caracter = palabraSecreta.charAt(i);
        letraEcontrada = letraEcontrada + 1;

        if (caracter == letra && letraEcontrada == 1) {
            mostrarLetra(caracter, letraEcontrada);
            coincidencia = coincidencia + 1;
            valido = true;
        } else if (caracter == letra && letraEcontrada == 2) {
            mostrarLetra(caracter, letraEcontrada);
            coincidencia = coincidencia + 1;
            valido = true;
        } else if (caracter == letra && letraEcontrada == 3) {
            mostrarLetra(caracter, letraEcontrada);
            coincidencia = coincidencia + 1;
            valido = true;
        } else if (caracter == letra && letraEcontrada == 4) {
            mostrarLetra(caracter, letraEcontrada);
            coincidencia = coincidencia + 1;
            valido = true;
        } else if (caracter == letra && letraEcontrada == 5) {
            mostrarLetra(caracter, letraEcontrada);
            coincidencia = coincidencia + 1;
            valido = true;
        }
    }

    if (coincidencia == 5) {
        alert("HA GANADO");
        mostrarImagen("ahorcadoImagen", "ganador.gif");
    } else if (!valido) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        intentosError = intentosError + 1;
        mostrarAhorcado();
    }
}

const ingresarLetra = function () {
    let letra = recuperarTexto("txtLetra");
    if (esMayuscula(letra)) {
        if (intentos <= 9) {
            intentos = intentos + 1;
            validar(letra);
        } else {
            alert("HA PERDIDO");
            mostrarImagen("ahorcadoImagen", "gameOver.gif");
        }
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULA");
    }
}