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