// Proyecto Objetos en JavaScript


const libro = {
    // Propiedades básicas del libro
    titulo: "El castillo bagabundo",
    autor: "howl",
    anio: 1943,
    estado: "disponible",
    // cap
    capitulos: [
        "Capítulo 1: sophie habla con los sombreros",
        "Capítulo 2: sophie se convierte en anciana",
        "Capítulo 3: sophie conoce a howl",
        "Capítulo 4: sophie y howl se enamoran",
        "Capítulo 5: sophie y howl enfrentan a la bruja"
    ],
    
    // describir el libro
    describirLibro() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },
    
    // cambiar ele stado del libro
    cambiarEstado(nuevoEstado) {
        if (nuevoEstado === "disponible" || nuevoEstado === "prestado") {
            this.estado = nuevoEstado;
            console.log(`El estado del libro ha cambiado a: ${this.estado}`);
        } else {
            console.log('Estado inválido. Use "disponible" o "prestado"');
        }
    },
    

};

const libro2 = {
    titulo: "mujercitas",
    autor: "louisa may alcott",
    anio: 1868,
    estado: "prestado",
    capitulos: [
        "Capítulo 1: cargas",
        "Capítulo 2: la vida de meg",
        "Capítulo 3: la vida después de la guerra",
        "Capítulo 4: el matrimonio de meg",
        "Capítulo 5: la vida de jo"
    ],
    describirLibro() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },
    cambiarEstado(nuevoEstado) {
        if (nuevoEstado === "disponible" || nuevoEstado === "prestado") {
            this.estado = nuevoEstado;
            console.log(`El estado del libro ha cambiado a: ${this.estado}`);
        } else {
            console.log('Estado inválido. Use "disponible" o "prestado"');
        }   
    },
};



const libro3 = {
    titulo: "Almendra",
    autor: "Won Pyung Sohn",
    anio: 2020,
    estado: "disponible",
    capitulos: [
        "Capítulo 1: La amígdala",
        "Capítulo 2: El niño sin emociones",
        "Capítulo 3: Conociendo a Gon",
        "Capítulo 4: Las primeras sonrisas",
        "Capítulo 5: El accidente",
        "Capítulo 6: El proceso de sanación",
        "Capítulo 7: Aprendiendo a sentir"
    ],
    describirLibro() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },
    cambiarEstado(nuevoEstado) {
        if (nuevoEstado === "disponible" || nuevoEstado === "prestado") {
            this.estado = nuevoEstado;
            console.log(`El estado del libro ha cambiado a: ${this.estado}`);
        } else {
            console.log('Estado inválido. Use "disponible" o "prestado"');
        }   
    },
};

libro.describirLibro();
libro2.describirLibro();
libro3.describirLibro();