//crear arreglo de productos
const productos = [
    { nombre: "laptop", precio: 800, categoria: "electronica" },
    { nombre: "camiseta", precio: 25, categoria: "ropa" },
    { nombre: "libro", precio: 15, categoria: "libros" },
    { nombre: "auriculares", precio: 50, categoria: "electronica" },
    { nombre: "mochila", precio: 120, categoria: "accesorios" }
];

console.log("arreglo original de productos:");
console.log(productos);
console.log("--------------------------");

//filtrar productos que cuestan menos de $100
const productosFiltrados = productos.filter(producto => producto.precio < 100);

console.log("productos con precio menor a $100:");
console.log(productosFiltrados);
console.log("--------------------------");

//ordenar alfabeticamente por nombre
const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (a.nombre < b.nombre) return -1;
    if (a.nombre > b.nombre) return 1;
    return 0;
});

console.log("productos ordenados alfabeticamente:");
console.log(productosOrdenados);
console.log("--------------------------");

//generar arreglo solo con los nombres
const nombresProductos = productosOrdenados.map(producto => producto.nombre);

console.log("solo nombres de productos:");
console.log(nombresProductos);
console.log("--------------------------");

//metodo adicional: reduce - calcular el precio total de los productos filtrados
const precioTotal = productosFiltrados.reduce((acumulador, producto) => {
    return acumulador + producto.precio;
}, 0);

console.log("precio total de productos menores a $100 (usando reduce):");
console.log(`$${precioTotal}`);
console.log("--------------------------");

//bonus: otros metodos utiles
// some - verificar si hay algun producto de categoria "ropa"
const hayRopa = productos.some(producto => producto.categoria === "Ropa");
console.log("¿hay productos de ropa?:", hayRopa);

//every - verificar si todos los productos cuestan mas de $10
const todosMayores10 = productos.every(producto => producto.precio > 10);
console.log("¿todos los productos cuestan más de $10? (usando every):", todosMayores10);

//includes - buscar un producto especifico en el arreglo de nombres
const tieneCamiseta = nombresProductos.includes("camiseta");
console.log("¿camiseta esta en la lista de nombres?:", tieneCamiseta);