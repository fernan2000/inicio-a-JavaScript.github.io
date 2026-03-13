let obj = {
    nombre: "fer",
    edad: 18,
    materia: "escritora"
}

//destructurando

let { nombre, edad, materia } = obj
//podemos traerlo a propiedades que queramos
//let {nombre }= obj

console.log(nombre)
console.log(edad)
console.log(materia)

let arreglo = ["papaya", "mango", "fresa", "piña" ]
let [fruta_1 ] = arreglo
console.log(fruta_1)

let [ , , , fruta4 ] = arreglo
console.log(fruta4)

let[ fruta_pos_0, fruta2 ] = arreglo
console.log(fruta_pos_0)
console.log(fruta2)