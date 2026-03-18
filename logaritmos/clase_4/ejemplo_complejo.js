const invitados = [
    { nombre: "Lydia Bennet", renta: 100 },
    { nombre: "Jane Bennet", renta: 500 },
    { nombre: "Sr. Bingley", renta: 4000 },
    { nombre: "Sr. Darcy", renta: 10000 },
    { nombre: "Lady Catherine de Bourgh", renta: 25000 }
];

const objetivo = 14000;

//extraemos solo las rentas en un arreglo
// 1. inicializar los dos punteros
let izquierda = 0;
let derecha = invitados.length - 1;
let suma = 0;

// 2. Mientras izquierda sea menor que derecha:
while (izquierda < derecha) {
    //2.1 clacula la suma del elemento en las posiciones izquierda y derecha
    //suma = arr[izquierda] + arr[derecha]
    suma = invitados[izquierda].renta + invitados[derecha].renta // CORREGIDO
    //2.2 si la suma es igual al valor objetivo,encontramos el par
    if (suma === objetivo) {
        console.log(`Par encontrado: ${invitados[izquierda].nombre}  y ${invitados[derecha].nombre}`); // CORREGIDO
        break;
    }

    if (suma < objetivo) {
        izquierda++; //suma mayor
    } else {
        derecha--;   //suma menor
    }
}

if (izquierda >= derecha) {
    console.log("No se encontro ningun par que sume el objetivo.");
}