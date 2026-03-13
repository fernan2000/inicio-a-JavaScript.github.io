//
let arreglo = ["uva", "melon", "manzana", "papaya"]

arreglo.unshift("platano")//añadir al inicio
console.log(arreglo)

arreglo.shift()//quitar al inicio
console.log(arreglo)

arreglo.push("platano")//añadir al final
console.log(arreglo)
 
arreglo.pop()//quitar al final
console.log(arreglo)

console.log(arreglo.length)//tamaño del arreglo(propiedad)

arreglo = {
    unshift: function (element) {
        
        return this.length
    }
}
