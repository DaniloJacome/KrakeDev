let clientes = [
    { cedula: "12345465", nombre: "Juan", edad: 20 },
    { cedula: "12789789", nombre: "Mario", edad: 50 },
    { cedula: "13467978", nombre: "Pepe", edad: 24 },
];

guardarCambios = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarEntero("txtEdad");

    let datosCliente = {}
    datosCliente.cedula = valorCedula;
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;
    modificarCliente(datosCliente);
    mostrarClientes();

}

modificarCliente = function (cliente) {
    let clienteEncontrado = buscarClientes(cliente.cedula);
    if (clienteEncontrado != null) {
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;
    }

}

ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedulaBusqueda");
    let respuesta = buscarClientes(valorCedula);
    if (respuesta == null) {
        alert("cliente no encontrado")
    } else {
        mostrarTextoEnCaja("txtCedula", respuesta.cedula);
        mostrarTextoEnCaja("txtNombre", respuesta.nombre);
        mostrarTextoEnCaja("txtEdad", respuesta.edad);
    }

}

crearCliente = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarEntero("txtEdad");

    let nuevoCliente = {}
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;
    agregarCliente(nuevoCliente);
}

agregarCliente = function (cliente) {
    let resultado = buscarClientes(cliente.cedula);
    if (resultado == null) {
        clientes.push(cliente);
        mostrarClientes();
        alert("cliente agregado");
    } else {
        alert("ya existe un cliente con esa cedula " + cliente.cedula);
    }
}

buscarClientes = function (cedula) {
    let elementoCliente;
    let clienteEncontrado = null;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }

    }
    return clienteEncontrado;

}

mostrarClientes = function () {
    let cmpTabla = document.getElementById("tablaClientes");
    let contenidoTabla =
        "<table>" +
        "<tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>" +
        "</tr>";

    let elementoCliente;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla +=

            "<tr>" +

            "<td>" + elementoCliente.cedula + "</td>" +
            "<td>" + elementoCliente.nombre + "</td>" +
            "<td>" + elementoCliente.edad + "</td>" +

            "</tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}
