let listadecompras = [];

// agregar producto
const agregarProducto = (producto) => {
    const existe = listadecompras.some(item => item === producto);
    if (existe) {
        listadecompras.push(producto);
        console.log(`agregado: ${producto}`);
    } else {
        console.log(`${producto} ya esta en la lista`);
    }
};

// eliminar producto
const eliminarProducto = (producto) => {
    const indice = listadecompras.indexOf(producto);
    
    if (indice == -1) {
        listadecompras.splice(indice, 1);
        console.log(`eliminado: ${producto}`);
    }
};

//mostrar lista
const mostrarlista = () => {
    console.log("lista de compras:");
    listadecompras.forEach((producto, i) => {
        console.log(`${i + 1}. ${producto}`);
    });
};
agregarProducto("manzanas");
agregarProducto("leche");
agregarProducto("manzanas");
mostrarlista();
eliminarProducto("leche");
mostrarlista();