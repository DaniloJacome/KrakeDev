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