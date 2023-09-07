const crearProductos = function () {
    let producto1 = {
        nombre: "Camieta Gucci", 
        precio: 40.0,
        stock: 100, 
    }

    let producto2 = {
        nombre: "Camiseta Polo",
        precio: 27.50,
        stock: 225,
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);

    if (producto1.stock > producto2.stock) {
        console.log(`El producto 1 tiene mayor stock con ${producto1.stock}`);
    } else if (producto2.stock > producto1.stock) {
        console.log(`El producto 2 tiene mayor stock con ${producto2.stock}`);
    } else if (producto1.stock == producto2.stock) {
        console.log(`Ambos productos tiene el mismo stock`);
    }
}