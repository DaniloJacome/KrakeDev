const validarPlaca = function () {
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    if (erroresEstructura == null) {
        mostrarTexto("lblPlacaValida", "ESTRUCTURA VALIDA");
        if (obtenerProvincia(placa) == null) {
            mostrarTexto("lblErrores1", "NO PERTENECE A NINGUNA PROVINCIA");
        }

        if (obtenerTipo(placa) == null) {
            mostrarTexto(
                "lblErrores2",
                "Es un vehiculo particular, placa de color blanco"
            );
        }
        obtenerDiaPicoYPlaca(placa);
    } else {
        mostrarTexto("lblPlacaValida", "ESTRUCTURA INCORRECTA");
    }
}

const limpiar = function () {
    mostrarTextoEnCaja("txtPlaca", " ");
    mostrarTexto("lblPlacaValida", " ");
    mostrarTexto("lblErrores", " ");
    mostrarTexto("lblErrores1", " ");
    mostrarTexto("lblErrores2", " ");
    mostrarTexto("lblErrores3", " ");
    mostrarTexto("lblErrores4", " ");
    mostrarTexto("lblErrores5", " ");
    mostrarTexto("lblErrores6", " ");
    mostrarTexto("lblErrores7", " ");
    mostrarTexto("lblErrores8", " ");
}
