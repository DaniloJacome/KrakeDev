const esMayuscula = function (caracter) {
  let mayuscula = caracter.charCodeAt(0);
  if (mayuscula >= 65 && mayuscula <= 90) {
    return true;
  } else {
    return false;
  }
}

const esDigito = function (caracter) {
  let numero = caracter.charCodeAt(0);
  if (numero >= 48 && numero <= 57) {
    return true;
  } else {
    return false;
  }
}

const caracterEspecial = function(caracter){
  let especial= caracter.charCodeAt(0);
  if(especial==42 || especial==45 || especial==95){
    return true;
  } else {
    return false;
  }
}

const esGuion = function(caracter){
    let guion = caracter.charCodeAt(0);
    if (guion == 45){
        return true;
    }else{
        return false;
    }
}

const recuperarTexto = function (idComponente){
  let componente = document.getElementById(idComponente);
  let valorIngresado = componente.value;
  return valorIngresado;
}

const mostrarTexto = function(idComponente,mensaje){
  let componente = document.getElementById(idComponente)
  componente.innerText = mensaje;
}


const mostrarTextoEnCaja = function(idComponente,mensaje){
  let componente=document.getElementById(idComponente);
  componente.value = mensaje;
}
