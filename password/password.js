const ejecutarValidacion = function () {
  let textoContraseña = recuperarTexto("textCampo");
  validarPassword(textoContraseña);
}

const validarPassword = function (password) {
  let longitud;
  let letra;
  let contadorMayuscula = 0;
  let contadorDigito=0;
  let contadorEspecial = 0;
  let validoMayusculas;
  let validaDigito;
  let validoEspecial;

  if (password.length >= 8 && password.length <= 16) {
      longitud=true;
      mostrarTexto("txtmesaje"," ");
      


      for (let i = 0; i < password.length; i++) {
          letra = password.charAt(i);
          if (esMayuscula(letra)) {
              contadorMayuscula = contadorMayuscula + 1;
              validoMayusculas = true;
          }

          if (esDigito(letra)) {
              contadorDigito = contadorDigito + 1;
              validaDigito = true;
          }

          if (caracterEspecial(letra)) {
               contadorEspecial = contadorEspecial + 1
               validoEspecial = true;
          }
      }
  }

  if(longitud){
      if(validoMayusculas){
          mostrarTexto("txtmesaje1",`Se agrego letra  ${contadorMayuscula} mayuscula esta correcto`)
      }else{
          mostrarTexto("txtmesaje1",`Tiene ${contadorMayuscula} caracter de letra mayuscula.Es recomendado colocar al menos una letra mayuscula`);
      }

      if(validaDigito){
          mostrarTexto("txtmesaje2",`Se agrego ${contadorDigito} digitos esta correcto`)
      }else{
          mostrarTexto("txtmesaje2",`Tiene ${contadorDigito} caracter de digito. Es recomendado colocar al menos un digito`);
      }

      if(validoEspecial){
          mostrarTexto("txtmesaje3",`Se agrego ${contadorEspecial} caracter especial esta correcto`)
      }else{
          mostrarTexto("txtmesaje3",`Tiene ${contadorEspecial} caracter especial. Es recomendado colocar al menos un caracter especial ( - , _ , *)`);
      }
      
  }else{
      mostrarTexto("txtmesaje",`Tiene ${password.length} caracteres tiene que ser entre 8 y 16 caracteres`);
      mostrarTexto("txtmesaje1"," ");
      mostrarTexto("txtmesaje2"," ");
      mostrarTexto("txtmesaje3"," ");
  }

  
};
