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

const deshabilitarComponentesDeIngreso = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}