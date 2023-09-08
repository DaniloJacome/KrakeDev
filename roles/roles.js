let empleados = [
    { cedula: "1253587565", nombre: "DAVID", apellido: "SUAREZ", sueldo: 450.0 },
    { cedula: "5165484812", nombre: "ALEJANDRO", apellido: "DAVALOS", sueldo: 500.0, },
    { cedula: "2689562264", nombre: "CRISTIAN", apellido: "JACOME", sueldo: 1250.0, },
]

let esNuevo = false;

const mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();

}

const mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("btnGuadarRol");
    mostrarRoles();
}

const mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarRoles();
    mostrarTotales();
}

const mostrarEmpleados = function () {
    let elementoEmpleados;
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla =
        "<table>" +
        "<tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";

    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleados = empleados[i];
        contenidoTabla +=
            "<tr>" +
            "<td>" + elementoEmpleados.cedula + "</td>" +
            "<td>" + elementoEmpleados.nombre + "</td>" +
            "<td>" + elementoEmpleados.apellido + "</td>" +
            "<td>" + elementoEmpleados.sueldo +
            "</td>" +
            "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

const buscarEmpleado = function (cedulaIngresada) {
    let empleadosBuscar;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        empleadosBuscar = empleados[i];
        if (empleadosBuscar.cedula == cedulaIngresada) {
            empleadoEncontrado = empleadosBuscar;
            break;
        }
    }
    return empleadoEncontrado;
}

const buscarPorRol = function () {
    let recuperarCedula = recuperarTexto("txtBusquedaCedula2");
    let personaEncontrada = buscarEmpleado(recuperarCedula);
    if (personaEncontrada == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTexto("infoCedula", personaEncontrada.cedula);
        mostrarTexto("infoNombre", personaEncontrada.nombre);
        mostrarTexto("infoSueldo", personaEncontrada.sueldo);
    }
}


const agregarEmpleado = function (empleado) {
    let resultado = buscarEmpleado(empleado.cedula);
    if (resultado == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
}

const calcularAporteEmpleado = function (sueldo) {
    let aporte = sueldo * 0.0945;
    return aporte;
}

const calcularValorAPagar = function (sueldo, aporte, descuento) {
    let valorAPagar = sueldo - (aporte + descuento);
    return valorAPagar;
};

const calcularRol = function () {
    let sueldo = recuperarValorDiv("infoSueldo");
    let sueldoFloat = parseFloat(sueldo);
    let descuento = recuperarFloatDiv("txtDescuentos");

    if (descuento > 0 && descuento <= sueldoFloat) {
        let resultadoAporte = calcularAporteEmpleado(sueldoFloat);
        mostrarTexto("infoIESS", resultadoAporte);
        let pagar = calcularValorAPagar(sueldoFloat, resultadoAporte, descuento);
        mostrarTexto("infoPago", pagar.toFixed(2));
        habilitarComponente("btnGuadarRol");
    } else {
        alert("INGRESE UN VALOR FLOTANTE EN EL DESCUENTO");
    }
}

const buscarRol = function (cedulaRol) {
    let rolesBuscar;
    let rolesEncontrado = null;
    for (let i = 0; i < roles.length; i++) {
        rolesBuscar = roles[i];
        if (roles.cedula == cedulaRol) {
            rolesEncontrado = rolesBuscar;
            break;
        }
    }
    return rolesEncontrado;

}

const agregarRol = function (rol) {
    let resultado = buscarRol(rol.cedula);
    if (resultado == null) {
        roles.push(rol)
        alert("SE HA GUARDADO CORRECTAMENTE");
        limpiarRol();
        return true;
    } else {
        arte("YA EXISTE");
        return false;
    }
}

const deshabilitarComponentesDeIngreso = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

const ejecutarBusqueda = function () {
    let cedulaBusqueda = recuperarTexto("txtBusquedaCedula");
    let resultadoBusqueda = buscarEmpleado(cedulaBusqueda);
    if (resultadoBusqueda == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTextoEnCaja("txtCedula", resultadoBusqueda.cedula);
        mostrarTextoEnCaja("txtNombre", resultadoBusqueda.nombre);
        mostrarTextoEnCaja("txtApellido", resultadoBusqueda.apellido);
        mostrarTextoEnCaja("txtSueldo", resultadoBusqueda.sueldo);
        deshabilitarComponenteBusqueda();
    }
}

const guardar = function () {
    let cedulaCaja = recuperarTexto("txtCedula");
    let nombreCaja = recuperarTexto("txtNombre");
    let apellidoCaja = recuperarTexto("txtApellido");
    let sueldoCaja = recuperarFloat("txtSueldo");

    // cedula
    let digitoCedula;
    let nuevaCedula;
    let resultadoDigito = false;
    if (cedulaCaja.length == 10) {
        mostrarTexto("lblErrorCedula", " ");
        for (let i = 0; i < cedulaCaja.length; i++) {
            digitoCedula = cedulaCaja.charCodeAt(i);
            if (!esDigito(digitoCedula)) {
                resultadoDigito = true;
            }
        }

        if (resultadoDigito) {
            mostrarTexto("lblErrorCedula", "No debe tener letras");
        } else {
            nuevaCedula = true;
        }
    } else {
        mostrarTexto("lblErrorCedula", " Tiene que tener 10 digitos");
    }

    //Nombre
    let mayusculasNombre;
    let nuevoNombre;
    let resultadoMayuscula = false;
    if (nombreCaja.length >= 3) {
        mostrarTexto("lblErrorNombre", " ");
        for (let i = 0; i < nombreCaja.length; i++) {
            mayusculasNombre = nombreCaja.charCodeAt(i);
            if (!esMayuscula(mayusculasNombre)) {
                resultadoMayuscula = true;
            }
        }

        if (resultadoMayuscula) {
            mostrarTexto("lblErrorNombre", "Deben ser mayusculas");
        } else {
            nuevoNombre = true;
        }
    } else {
        mostrarTexto("lblErrorNombre", " Tiene que tener al menos 3 caracteres");
    }

    //Apellido
    let mayusculasApellido;
    let nuevoApellido;
    let resultadoMayusculaApellido = false;
    if (apellidoCaja.length >= 3) {
        mostrarTexto("lblErrorApellido", " ");
        for (let i = 0; i < apellidoCaja.length; i++) {
            mayusculasApellido = apellidoCaja.charCodeAt(i);
            if (!esMayuscula(mayusculasApellido)) {
                resultadoMayusculaApellido = true;
            }
        }

        if (resultadoMayusculaApellido) {
            mostrarTexto("lblErrorApellido", "Deben ser mayusculas");
        } else {
            nuevoApellido = true;
        }
    } else {
        mostrarTexto("lblErrorApellido", " Tiene que tener al menos 3 caracteres");
    }

    //Sueldo
    let nuevoSuelo;
    if (sueldoCaja >= parseFloat(400) && sueldoCaja <= parseFloat(5000)) {
        mostrarTexto("lblErrorSueldo", " ");
        nuevoSuelo = true;
    } else {
        mostrarTexto("lblErrorSueldo", " Tiene que tener entre $400 y $5000");
    }

    if (nuevaCedula & nuevoNombre & nuevoApellido & nuevoSuelo) {
        if (esNuevo) {
            let nuevoCliente = {};
            nuevoCliente.cedula = cedulaCaja;
            nuevoCliente.nombre = nombreCaja;
            nuevoCliente.apellido = apellidoCaja;
            nuevoCliente.sueldo = sueldoCaja;
            nuevoEmpleado = agregarEmpleado(nuevoCliente);
            if (nuevoEmpleado) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
            } else {
                limpiarBoton();
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + cedulaCaja);
            }
        }

        if (esNuevo == false) {
            for (let i = 0; i < empleados.length; i++) {
                empleadosBuscar = empleados[i];
                if (empleadosBuscar.cedula == cedulaCaja) {
                    empleados[i].nombre = nombreCaja;
                    empleados[i].apellido = apellidoCaja;
                    empleados[i].sueldo = sueldoCaja;
                    break;
                }
            }

            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
            mostrarEmpleados();
        }
        deshabilitarComponentesDeIngreso();
    }
    esNuevo = false;
}


const ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}

const limpiarBoton = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    mostrarTextoEnCaja("txtBusquedaCedula", "");
    mostrarTextoEnCaja("txtBusquedaCedula", "");
    habilitarComponente("btnNuevo");
    deshabilitarComponente("btnGuardar");
}
