let mountains = ['everest', 'fuji', 'nanga parbar']

console.log(mountains[0])
console.log(mountains[1])
console.log(mountains[2])

mountains.push('popocatepetl')
console.log(mountains)
console.log(mountains.indexOf('fuji'))
console.log(mountains.indexOf('iztazihutl'))  //-1 es algo que no esta en la lista
//ciclo for para recoger un arreglo
const numeros = [10,20,30,40]
console.log('------------------------------------')
//for(inicializacion de la variable para contar; condicion a cumplir -hast donde -;)
for (let i = 0;i<numeros.length; i++) {
        console.log(numeros[i])
}