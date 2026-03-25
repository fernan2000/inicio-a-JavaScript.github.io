//funcion recursiva para buscar un regalo
function buscarRegalo(lista, regalo, posicion = 0) {
    //si llegamos al final y no lo encontramos
    if (posicion === lista.length) {
        return "el regalo no esta en la lista";
    }
    //si encontramos el regalo
    if (lista[posicion] === regalo) {
        return `el regalo "${regalo}" esta en la posicion ${posicion}`;
    }
    //llamada recursiva
    return buscarRegalo(lista, regalo, posicion + 1);
}

//ejemplo de uso
const regalos = ["guitarra", "mahjong", "audifonos", "rompecabezas"];

console.log(buscarRegalo(regalos, "mahjong"));
console.log(buscarRegalo(regalos, "guitarra"));