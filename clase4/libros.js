//para almacenar libros
let librosLeidos = [];

//agregar libro al array
function agregarLibro(titulo) {
    librosLeidos[librosLeidos.length] = titulo;
}
//funcion anonima
let mostrarLibrosLeidos = function() {
    //imprime cada libro
    console.log(librosLeidos[0]);
    console.log(librosLeidos[1]);
    console.log(librosLeidos[2]);
    console.log(librosLeidos[3]);
    console.log(librosLeidos[4]);
}


//llama a ala funcion para agregar libros 
agregarLibro("sonata de invierno");
agregarLibro("almendra");
agregarLibro("pase lo que pase,todo va a estar bien");
agregarLibro("el camino de regreso a casa");
agregarLibro("el gato que cuidaba la biblioteca");
mostrarLibrosLeidos();// muestra los libros