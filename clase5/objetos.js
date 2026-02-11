//objetos

//sintaxis

let obj = {
    llave1: "valor1",
    llave2: "valor2",
}
//ejemplo
let persona = {
    nombre: "vatyy",
    edad: 20,
    profesion: "progrmadora",
    telefono:4291201678
}

console.log(persona)
//accediendo al nombre 
console.log("Nombre:",persona.nombre)
//otra forma de acceder a las propiedades del objeto
console.log("edad",persona["edad"])
//manipulacion edad
console.log("cumpleaños:", 2026 - persona.edad)
//modificando el telefono
persona.telefono = 1234567890
console.log(persona.telefono)
//agregar propiedad
persona.ciudad = "emiliano zpata 6"
console.log(persona.ciudad)
console.log(persona)


//metodos
//funciones especificas de ,os objetos

let libro = {
    titulo: "el castillo ambulante",
    autor: "howl",
    info: function() {
        console.log(`${this.titulo} de ${this.autor}`)
    }
}
libro.info()

let libro2 = {
    titulo: "mujercitas",
    autor: "anonimo",
    info: function() {
        console.log(`${this.titulo} de ${this.autor}`)
    }
}
libro2.info()


let libro3 = {
    titulo: "susurros del corazon",
    autor: "studio G",  
    info() {
        console.log(this.titulo)
    }
}
