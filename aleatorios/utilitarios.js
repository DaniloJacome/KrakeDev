mostrarImagen = function (idComponente, rutaImagen) {
  let componente = document.getElementById(idComponente);
  componente.src = rutaImagen;
}

mostrarTextoEnCaja = function (idComponente, mensaje) {
  let componente = document.getElementById(idComponente);
  componente.value = mensaje;
}
mostrarTexto = function (idComponente, mensaje) {
  let componente = document.getElementById(idComponente);
  componente.innerText = mensaje;
}

recuperarTexto = function (idComponente) {
  let componente = document.getElementById(idComponente);
  let valorIngresado = componente.value;
  return valorIngresado;
}

recuperarInt = function (idComponente) {
  let valorCaja = recuperarTexto(idComponente);
  valorEntero = parseInt(valorCaja);
  return valorEntero;
}

recuperarFloat = function (idComponente) {
  let valorCaja = recuperarTexto(idComponente);
  valorDecimal = parseFloat(valorCaja);
  return valorDecimal;
}
