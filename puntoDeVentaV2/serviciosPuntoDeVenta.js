const calcularSubtotal = function (precio, cantidad) {
  let valorSubtotal = precio * cantidad;
  return valorSubtotal;
}

const calcularDescuentoPorVolumen = function (subtotal, cantidad) {
  let valorDeDescuento;
  if (cantidad < 3) {
    valorDeDescuento = 0;
  } else if (cantidad >= 3 && cantidad <= 5) {
    valorDeDescuento = subtotal * 0.03;
  } else if (cantidad >= 6 && cantidad <= 11) {
    valorDeDescuento = subtotal * 0.04;
  } else if (cantidad >= 12) {
    valorDeDescuento = subtotal * 0.05;
  }
  return valorDeDescuento;
}

const calcularIVA = function (monto) {
  let iva = monto * 0.12;
  return iva;
}

const calcularTotal = function (subtotal, descuento, iva) {
  let valorTotal = subtotal - descuento + iva;
  return valorTotal;
}
