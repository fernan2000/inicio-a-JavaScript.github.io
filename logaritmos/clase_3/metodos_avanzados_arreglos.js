//every

let numeros = [2, 4, 5, 8]
const todosPares = numeros.every(elemento => elemento % 2 === 0 )
console.log(todosPares)

arr = ["A", "B", "C", "D"]
const todosStrings = arr.every(elemento => typeof elemento === "string" )
console.log(todosStrings)

console.log("----------------------------------")

// some

numeros = [1, 2, 3, 4, 5]
const haypares = numeros.some(elemento => elemento % 2 === 0 )
console.log(haypares)

arr = ["A", "B", "C", "D"]
const haynumeros = arr.every(elemento => typeof elemento === "number" )
console.log(haynumeros)

console.log("----------------------------------")

//includes

let nombres = ["ana", "ximena", "rocy"]
const incluyeJuan = nombres.includes("rocy")
console.log(incluyeJuan)

//equivale en some......
incluyeJuan = nombres.some(elemento => elemento === "Juan")
console.log(incluyeJuan)

console.log("----------------------------------")

//reduce

const numerois = [1, 2, 3, 4]
suma = numeros.reduce((acumulador, elemento)  => acumulador + elemento, 0)
console.log(suma)

numeros.reduce(function (acumulador, elemento){
    return acumulador + elemento
}, 0)

const funcion_de_acumulacion = (acumulador, elemento) => {
    return acumulador + elemento
}

numeros.reduce(funcion_de_acumulacion, 0)
//equivale a ....

acumulador = 0
for(let i = 0; i <numeros.length; i++) {
    acumulador = acumulador + numeros[i]
}
console.log(acumulador)
console.log(suma)

//ejemplo de reduce imitando a "join"

let arr = ["A", "B", "C", "D"]
let result =arr.reduce((acumulador, elemento) => acumulador += elemento, + " "," ")
console.log(result)

//valor maximo

arr = [1, 4, 8, 2, 99, 3,7]
let max = arr.reduce((antes,elemento ) => {
    if (antes > elemento) {
        return antes
    } else {
        return elemento
    }
}, 0)
console.log(max)

//version compacta
max = arr.reduce((antes, elemento) => antes > elemento ? antes : elemento)
console.log(max)

