calcularTasaInteres=function(ingresoAnual){
    let ingresoAnual=recuperarFloat("txtIngresoAnual");

    if (ingresoAnual<300.000) {
        mostrarTexto("lblTasa","16%");
    }else if(ingresoAnual>=300.000 && ingresoAnual>500.000){
        mostrarTexto("lblTasa","15%")
    }else if(ingresoAnual>=500.00 && ingresoAnual>1000.000){
        mostrarTexto("lblTasa","14%")
    }else if(ingresoAnual>=1000.000 && ingresoAnual>2000.000){
        mostrarTexto("lblTasa","13%")
    }else if(ingresoAnual>2000.000){
        mostrarTexto("lblTasa","12%")
    }

    let valorTasaInteres;
    valorTasaInteres=(ingresoAnual);
    return valorTasaInteres;
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let edad=recuperarInt("txtEdad");
    let ingresos=recuperarFloat("txtIngresos");
    let egresos=recuperarFloat("txtEgresos");
    if (edad>50){
        mostrarTexto("lblPago","30%");
    }else if(edad==50){
        mostrarTexto("lblPago","40%");
    }
     let valorCouta;
     valorCouta=ingresos-egresos;
     return valorCouta;
}

calcularDescuento=function(precio,cantidad){
    let precio=recuperarFloat("txtPrecio");
    let cantidad=recuperarInt("txtCantidad");
    if (cantidad<3){
        mostrarTexto("lblDescuento","NO RECIBE DESCUENTO")
    }else if (cantidad>=3 && cantidad==5){
        mostrarTexto("lblDescuento","2%");
    }else if(cantidad>=6 && cantidad==11){
        mostrarTexto("lblDescuento","3%");
    }else if(cantidad>=12){
        mostrarTexto("lblDescuento","4%");
    }
    let valorPagar;
    valorPagar=(precio,cantidad);
    return valorPagar;
}

determinarColesterol=function(nivelColesterol){
    let nivelColesterol=recuperarFloat("txtColesterol");
    if(nivelColesterol<200){
        mostrarTexto("lblColesterol","Deseable");
    }else if(nivelColesterol==200 && nivelColesterol<=239){
        mostrarTexto("lblColesterol","Limite superior del rango normal");
    }else if(nivelColesterol>240){
        mostrarTexto("lblColesterol","Alto");
    }
    let resultadoColesterol
    resultadoColesterol=(nivelColesterol);
    return nivelColesterol;
}

validarClave=function(clave){
    let clave=recuperarString("txtClave");
    if(clave>=8 && clave<=16){
        return false;
    }else{
        return true;
    }
}

esMayuscula=function(caracter){
    let caracter=recuperarString("txtCaracter");
    let codigoLetra=caracter.charCodeAt(0); 
    if(codigoLetra==esMayuscula){
        return true;
    }else{
        return false;
    }
}

esMinuscula=function(caracter){
    let caracter=recuperarString("txtCaracter");
    let codigoLetra=caracter.charCodeAt(0);
    if(codigoLetra==esMinuscula){
        return true;
    }else{
        return false;
    } 
}

esDigito=function(caracter){
    let caracter=recuperarString("txtCaracter");
    let codigoLetra=caracter.charCodeAt(0); 
    if(codigoLetra==esDigito){
        return true;
    }else{
        return false;
    }
}

darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let notaMatematica=recuperarFloat("txtMatematica");
    let notaFisica=recuperarFloat("txtFisica");
    let notaGeometria=recuperarFloat("txtGeometria");
    if(notaMatematica>90 && notaFisica>90 && notaGeometria>90){
        return true;
    }else{
        return false;
    }
}

otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let notaMatematica=recuperarFloat("txtMatematica");
    let notaFisica=recuperarFloat("txtFisica");
    let notaGeometria=recuperarFloat("txtGeometria");
    if(notaMatematica>90 || notaFisica>90 && notaGeometria>80){
        return true;
    }else{
        return false;
    }
}

dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    let notaMatematica=recuperarFloat("txtMatematica");
    let notaFisica=recuperarFloat("txtFisica");
    let notaGeometria=recuperarFloat("txtGeometria");
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90 && notaFisica>notaMatematica){
        return true;
    }else{
        return false;
    }
}