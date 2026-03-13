let carritoCompras = {
    productos: [],
    agregarproductos : function(producto) {
        this.productos.push(producto)
    },
    eliminarProducto: function(indice) {
    this.productos.splice(indice, 1)
    }
};

carritoCompras.agregarproductos("manzana")
carritoCompras.agregarproductos("platano")
carritoCompras.agregarproductos("mango")
carritoCompras.agregarproductos("anis")
console.log(carritoCompras.productos)

carritoCompras.eliminarProducto(1)
console.log(carritoCompras.productos)


