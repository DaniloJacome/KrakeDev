const validarEstructura = function (placa) {
    let valida = null;
    if (placa.length == 7 || placa.length == 8) {
        mostrarTexto("lblErrores", " ");
        mostrarTexto("lblErrores1", " ");
        mostrarTexto("lblErrores2", " ");
        mostrarTexto("lblErrores3", " ");
        mostrarTexto("lblErrores4", " ");
        mostrarTexto("lblErrores5", " ");
        mostrarTexto("lblErrores6", " ");
        mostrarTexto("lblErrores7", " ");
        mostrarTexto("lblErrores8", " ");

        if (esMayuscula(placa.charAt(0))) {
            mostrarTexto("lblErrores1", " ");
        } else {
            mostrarTexto(
                "lblErrores1",
                `El primer caracter debe ser mayuscula: ${placa.charAt(0)}`
            );
            valida = !null;
        }

        if (esMayuscula(placa.charAt(1))) {
            mostrarTexto("lblErrores2", " ");
        } else {
            mostrarTexto(
                "lblErrores2",
                `El segundo caracter debe ser mayuscula: ${placa.charAt(1)}`
            );
            valida = !null;
        }

        if (esMayuscula(placa.charAt(2))) {
            mostrarTexto("lblErrores3", " ");
        } else {
            mostrarTexto(
                "lblErrores3",
                `El tercero caracter debe ser mayuscula: ${placa.charAt(2)}`
            );
            valida = !null;
        }

        if (esGuion(placa.charAt(3))) {
            mostrarTexto("lblErrores4", " ");
        } else {
            mostrarTexto(
                "lblErrores4",
                `El cuarto caracter debe ser guion: ${placa.charAt(3)}`
            );
            valida = !null;
        }

        if (esDigito(placa.charAt(4))) {
            mostrarTexto("lblErrores5", " ");
        } else {
            mostrarTexto(
                "lblErrores5",
                `El quinto caracter debe ser digito: ${placa.charAt(4)}`
            );
            valida = !null;
        }

        if (esDigito(placa.charAt(5))) {
            mostrarTexto("lblErrores6", " ");
        } else {
            mostrarTexto(
                "lblErrores6",
                `El sexto caracter debe ser digito: ${placa.charAt(5)}`
            );
            valida = !null;
        }

        if (esDigito(placa.charAt(6))) {
            mostrarTexto("lblErrores7", " ");
        } else {
            mostrarTexto(
                "lblErrores7",
                `El septimo caracter debe ser digito: ${placa.charAt(6)}`
            );
            mostrarTexto("lblErrores8", " ");
            valida = !null;
        }

        ultimaPosicion = placa.length - 1;
        ultimaCaracter = placa.charAt(ultimaPosicion);
        if (ultimaCaracter == placa.charAt(7)) {
            if (esDigito(placa.charAt(7))) {
                mostrarTexto("lblErrores8", " ");
            } else {
                mostrarTexto(
                    "lblErrores8",
                    `El octavo caracter debe ser digito: ${placa.charAt(7)}`
                );
                valida = !null;
            }
        }
    } else {
        mostrarTexto("lblErrores", "La placa debe tener 7 u 8 caracteres");
        valida = !null;
    }
    return valida;
}
