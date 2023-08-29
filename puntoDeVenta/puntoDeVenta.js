calcularValorTotal = function(){
    //variables para recuperar los valores de las cajas de texto
    //variables para almacenar los retornos de las funciones
    //1. Recuperar el nombre del producto como String
    let nombreProducto=recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    let precioProducto=recuperarFloat("txtPrecio");
    //3. Recuperar cantidad como int
    let cantidad=recuperarInt("txtCantidad");
    //4. Recuperar el porcentaje de descuento como int
    let porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");
    let valorSubtotal=precioProducto*cantidad;
    let valorDescuento=(precioProducto*porcentajeDescuento)/100;
    let valorIVA=precioProducto*0.12;
    let valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    calcularSubTotal("lblSubtotal",valorSubtotal); 
    //5. Mostrar valorSubtotal en el componente lblSubtotal
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10
                Subtotal esperado: 54
            Si el caso de prueba es exitoso, hacer un commit
         */
    //6. Invocar a calcularDescuento y lo que devuelve guardar en la variable valorDescuento
    calcularValorDescuento("lblDescuento",valorDescuento);
    //7. Mostrar el resultado en el componente lblDescuento
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
                Descuento esperado: 5.4
            Si el caso de prueba es exitoso, hacer un commit
         */
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    calcularValorIva("lblValorIVA",valorIVA);
	//   El IVA debe calcularse sobre el valor del subtotal menos el descuento
    //9. Mostrar el resultado en el componente lblValorIva   
    /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
					--valorSubtotal: 54
					--descuento:5.4
					--valorSubtotal - descuento: 48.6
                IVA esperado: 5.832
            Si el caso de prueba es exitoso, hacer un commit
        */
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    mostrarTexto("lblTotal",valorTotal);
    //11. Mostrar el resultado en el componente lblTotal
     /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
					--valorSubtotal: 5.4
					--descuento: 5.4
					--IVA: 5.832
                Total esperado: 54.432
            Si el caso de prueba es exitoso, hacer un commit
        */
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    let mensajeBienvenida="Valor a pagar por "+cantidad+" "+nombreProducto+" "+"con"+" "+valorDescuento+"%"+" "+"de descuento:"+" "+"USD"+" "+valorTotal;
    mostrarTexto("lblResumen",mensajeBienvenida);
        /*
            Ejemplo: 
                Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
            Si funciona, hacer un commit
        */ 
    
}   
limpiar=function(){
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
}
/* SI TODO FUNCIONA, HACER UN PUSH */