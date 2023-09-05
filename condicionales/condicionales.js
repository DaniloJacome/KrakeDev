calcularTasaInteres=function(ingresoAnual){
    let ingresoAnualFloat=parseFloat(txtIngresoAnual);
    let valorTasa;
    if (ingresoAnualFloat<300000){
        valorTasa = 0.16;
      } else if (ingresoAnualFloat>=300000 && ingresoAnualFloat<500000) {
        valorTasa = 0.15;
      } else if (ingresoAnualFloat>=500000 && ingresoAnualFloat<1000000) {
        valorTasa = 0.14;
      } else if (ingresoAnualFloat>=1000000 && ingresoAnualFloat<2000000) {
        valorTasa = 0.13;
      } else if (ingresoAnualFloat>=2000000) {
        valorTasa = 0.12;
      }
    return valorTasa;
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let edadInt=recuperarInt(edad);
    let ingresoFloat=recuperarFloat(ingresos);
    let egresoFloat=recuperarFloat(egresos);
    let valorCuota;
    if (edadInt>50){
        valorCuota =(egresoFloat-ingresoFloat)*0.3;
    }else if(edadInt<=50  && edadInt>=18){
        valorCuota=(egresoFloat-ingresoFloat) * 0.4;
    }
     return valorCouta;
}

calcularDescuento=function(precio,cantidad){
    let precioFloat=parseFloat(precio);
    let cantidadInt=parseInt(cantidad);
    let valorPagar;
    let subtotal;
    let valorDescuento;
    if (cantidad<3){
        subtotal=precioFloat*cantidadInt;
    }else if (cantidad>=3 && cantidad>=5){
        subtotal=precioFloat-cantidadInt;
        valorDescuento=subtotal*0.02;
        valorPagar=subtotal-valorDescuento;
    }else if(cantidad>=6 && cantidad>=11){
        subtotal=precioFloat-cantidadInt;
        valorDescuento=subtotal*0.03;
        valorPagar=subtotal-valorDescuento;
    }else if(cantidad>=12){
        subtotal=precioFloat-cantidadInt;
        valorDescuento=subtotal*0.04;
        valorPagar=subtotal-valorDescuento;
    }
        return valorPagar;
}

determinarColesterolLDL=function(nivelColesterol) {
    let nivelColesterolFloat=parseFloat(nivelColesterol);
    let colesterolLDL;
    if (nivelColesterolFloat<100) {
      colesterolLDL = console.log(
        `Su nivel den colesterol LDL es de ${nivelColesterolFloat}. Optimo (lo mejor para sus salud)`
      );
    } else if (nivelColesterolFloat>=100 && nivelColesterolFloat<=129) {
      colesterolLDL=console.log(
        `Su nivel den colesterol LDL es de ${nivelColesterolFloat}. Casi optimo (mas o menos)`
      );
    } else if (nivelColesterolFloat>=130 && nivelColesterolFloat<=159) {
      colesterolLDL=console.log(
        `Su nivel den colesterol LDL es de ${nivelColesterolFloat}. Limite superior del rango normal`
      );
    } else if (nivelColesterolFloat>=160 && nivelColesterolFloat<=189) {
      colesterolLDL = console.log(
        `Su nivel den colesterol LDL es de ${nivelColesterolFloat}. NIVEL ALTO`
      );
    } else if (nivelColesterolFloat>=190) {
      colesterolLDL = console.log(
        `Su nivel den colesterol LDL es de ${nivelColesterolFloat}. NIVEL MUY ALTO`
      );
    }
    return colesterolLDL;
}

validarClave=function(clave) {
    if (clave.length<8 && clave.length>=16) {
      return true;
    } else {
      return false;
    }
}

esMayuscula=function(caracter) {
    let letra=caracter.charCodeAt(0);
    if (letra>=65 && letra<=90) {
      return true;
    } else {
      return false;
    }
}
  

esMinuscula=function(caracter) {
    let letra=caracter.charCodeAt(0);
    if (letra>=97 && letra<=122) {
      return true;
    } else {
      return false;
    }
}

esDigito =function(caracter) {
    let valorDigital=caracter.charCodeAt(0);
    if (valorDigital>=48 && valorDigital<=57) {
      return true;
    } else {
      return false;
    }
}

darPermiso=function(notaMatematica, notaFisica, notaGeometria) {
    let notaMatematica=parseFloat(notaMatematica);
    let notaFisica=parseFloat(notaFisica);
    let notaGeometria=parseFloat(notaGeometria);
    if (matematica>90 || fisica>90 || geometria>90) {
      return true;
    } else {
      return false;
    }
  }

otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let notaMatematica=recuperarFloat(notaMatematica);
    let notaFisica=recuperarFloat(notaFisica);
    let notaGeometria=recuperarFloat(notaGeometria);
    if(notaMatematica>90 || notaFisica>90 && notaGeometria>80){
        return true;
    }else{
        return false;
    }
}

dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    let notaMatematica=recuperarFloat(notaMatematica);
    let notaFisica=recuperarFloat(notaFisica);
    let notaGeometria=recuperarFloat(notaGeometria);
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90 && notaFisica>notaMatematica){
        return true;
    }else{
        return false;
    }
}