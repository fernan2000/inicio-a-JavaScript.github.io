

//funciones como parametros

const myfn = (otra_fn) => {
    const retorn_de_otra_fn = otra_fn()
    return retorn_de_otra_fn
}
const la_otra_fn = () => {
    return "prueba"
}

console.log(myfn(la_otra_fn))
console.log(myfn(() => {return "otra cosa"}))
console.log(myfn(() =>  "otra cosa"))


//find
const numeros = [1, 5, 10, 15]


let encontrado = numeros.find(elemento => {return elemento > 9 })
    encontrado = numeros.find(elemento =>  elemento > 9 )//la funcion anonima regrese verdadero o falso


console.log(encontrado)

 encontrado = numeros.find((elemento) => elemento == elemento )

console.log(encontrado)


 encontrado = numeros.find((elemento) => elemento == elemento )

 console.log(encontrado) 


 encontrado = numeros.find((elemento) => elemento > 20 )

 console.log(encontrado) 


 encontrado = numeros.find((elemento) => elemento == 5 )

 console.log(encontrado) 


 console.log(numeros) 

 console.log("--------------------------") 

//map -> NO modifica el arreglo

const numeros_map =[1, 2, 3, 4]


const dobles = numeros.map(elemento => elemento * 2)

console.log(dobles)
console.log(numeros_map)

dobles = numeros_map.map(elemento => "hola")
console.log(dobles)

const funcion_que_regresa_hola = function() {
    return "hola"
}

dobles = numeros_map.map(funcion_que_regresa_hola)
 console.log(dobles)

  console.log("--------------------------") 

//filter

let numeros_filter = [1,2,3,4,5]

let pares = numeros_filter.filter(elemento => elemento % 2 === 0)
console.log(pares)

pares = numeros_filter.filter(elemento => elemento > 3)
console.log(pares)

pares = numeros_filter.filter(() => true)
console.log(pares)

 console.log("--------------------------") 

//foreach

let nombres = ["ana", "juan", "pedro"]
nombres.forEach(nombre => console.log(`hola ${nombre}`))

for(let i = 0; i<nombres.length;i++) {
    console.log(`hola ${nombres[i]}`)
}

 console.log("--------------------------") 

//sort --> si modifica el arreglo
let numeros_sort = [3,1,4,2,11,21]
numeros_sort.sort()//sin parametros ordena de forma aleatoria

console.log(numeros_sort)

numeros.sort((a,b) => a-b)//3-1 = 2
console.log(numeros_sort)

//avanzado....

const personas =["juan", "manuel", "luis", "ana", "ximena"]

console.log(personas.find (() => Math.random() > 0.5))

personas.sort(() => Math.random() - 0.5)
console.log(personas)