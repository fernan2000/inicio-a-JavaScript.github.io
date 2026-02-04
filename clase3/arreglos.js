//lista de nombres

let nombres = ["Vasty", "xime", "itzel", "rocio", "maria"];
//nombre en posicion 0
console.log(nombres[0]);

//nombre en posicion 3
console.log(nombres[3]);

//arreglo completo
console.log(nombres);

//metodos de arreglos
//push() //agrega alguna cosa al final del arreglo
nombres.push("corazon");
console.log(nombres);
//pop() //lo quita el ultimo elemnto
nombres.pop();
console.log(nombres);
//unshift() //agrega alguna cosa al inicio del arreglo
nombres.unshift("corazon");
console.log(nombres);
//shift() //quita el primer elemento o cosa del arreglo
nombres.shift();
console.log(nombres);
//sort() // ordena cualquier cosa del array
let numeros = [1,6,8,7,9,11,98,56,37,19];
numeros.sort();
console.log(numeros);

numeros.sort((a, b) => a - b);
console.log(numeros);


//map //los modifica
let numeros_por_2 = numeros.map(a => a*2);
console.log(numeros_por_2);