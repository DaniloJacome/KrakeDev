calcularValorTotal = function () {
  let nombreProducto = recuperarTexto("txtProducto");
  let cantidad = recuperarInt("txtCantidad");
  let precioProducto = recuperarFloat("txtPrecio");

  if (
    esProductoValido(nombreProducto, "lblError1") &
    esCantidadValida(cantidad, "lblError2") &
    esCantidadPrecio(precioProducto, "lblError3")
  ) {
    let valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    mostrarTexto("lblSubtotal", ` ${valorSubtotal}`);

    let valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
    mostrarTexto("lblDescuento", ` ${valorDescuento}`);

    let valorParaCalcularIva = valorSubtotal - valorDescuento;
    let valorIVA = calcularIVA(valorParaCalcularIva);
    mostrarTexto("lblValorIVA", ` ${valorIVA}`);

    let valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    mostrarTexto("lblTotal", `$ ${valorTotal}`);
  }
}

const esProductoValido = function (valorCajaTexto, idComponente) {
  let hayErrores = false;
  if (valorCajaTexto == "") {
    mostrarTexto(idComponente, "*CAMPO OBLIGATORIO*");
    hayErrores = true;
  }
  if (valorCajaTexto.length > 10) {
    mostrarTexto(idComponente, "NO DEBE TENER MAS DE 10 CARACTERES");
    hayErrores = true;
  }
  if (hayErrores == false) {
    mostrarTexto(idComponente, " ");
  }
  return !hayErrores;
}

const esCantidadValida = function (valorCajaTexto, idComponente) {
  let hayErrores = false;
  if (isNaN(valorCajaTexto)) {
    mostrarTexto(idComponente, "*CAMPO OBLIGATORIO*");
    hayErrores = true;
  }
  if (valorCajaTexto > 100) {
    mostrarTexto(idComponente, "DEBE SER UN NUMERO ENTERO ENTRE 0 Y 100");
    hayErrores = true;
  }
  if (hayErrores == false) {
    mostrarTexto(idComponente, " ");
  }
  return !hayErrores;
}

const esCantidadPrecio = function (valorCajaTexto, idComponente) {
  let hayErrores = false;
  if (isNaN(valorCajaTexto)) {
    mostrarTexto(idComponente, "*CAMPO OBLIGATORIO*");
    hayErrores = true;
  }
  if (valorCajaTexto > 50) {
    mostrarTexto(idComponente, "DEBE SER UN NUMERO ENTRE 0 Y 50");
    hayErrores = true;
  }
  if (hayErrores == false) {
    mostrarTexto(idComponente, " ");
  }
  return !hayErrores;
}

limpiar = function () {
  valorCero = 0;
  mostrarTextoEnCaja("txtProducto", " ");
  mostrarTextoEnCaja("txtCantidad", " ");
  mostrarTextoEnCaja("txtPrecio", " ");
  mostrarTexto("lblSubtotal", "0.0");
  mostrarTexto("lblDescuento", "0.0");
  mostrarTexto("lblValorIVA", "0.0");
  mostrarTexto("lblTotal", "0.0");
  mostrarTexto("lblError1", " ");
  mostrarTexto("lblError2", " ");
  mostrarTexto("lblError3", " ");
}
