// En este ejercicio, la Sra. Bennet ha decidido que la pareja perfecta debe sumar
// exactamente 100 puntos de Influencia Social, pero para que el matrimonio no sea
// aburrido, la diferencia entre sus niveles de Prejuicio debe ser máxima.

const personajes = [
    { nombre: "Elizabeth Bennet", influencia: 10, prejuicio: 95 },
    { nombre: "Sr. Collins", influencia: 20, prejuicio: 10 },
    { nombre: "Sr. Wickham", influencia: 30, prejuicio: 80 },
    { nombre: "Sr. Bingley", influencia: 70, prejuicio: 5 },
    { nombre: "Sr. Darcy", influencia: 80, prejuicio: 90 },
    { nombre: "Lady Catherine", influencia: 90, prejuicio: 100 }
];
const objetivo = 100;

// 1. inicializar los dos punteros
let izquierda = 0;
let derecha = personajes.length - 1; // CAMBIADO: invitados → personajes
let sumainf = 0
let sumapreAntes = 0
let sumapre = 0
let pareja = []


// 2. Mientras izquierda sea menor que derecha:
while (izquierda < derecha) {
    //2.1 clacula la suma del elemento en las posiciones izquierda y derecha
    //suma = arr[izquierda] + arr[derecha]
    sumainf = personajes[izquierda].influencia + personajes[derecha].influencia
    //2.2 si la suma es igual al valor objetivo,encontramos el par
    if (sumainf === objetivo) {
        //console.log(`Par encontrado: ${objetivo_invitado.nombre}  y ${invitados[derecha].nombre}`);
        //break;

        sumapre = personajes[izquierda].prejuicio + personajes[derecha].prejuicio

        if(sumapreAntes > sumapre){
            sumapreAntes = sumapre
            pareja = [personajes[izquierda].nombre, personajes[derecha].nombre] // CAMBIADO: name → nombre

        }
    }

    if (sumainf < objetivo) {
        izquierda++; // necesitamos una suma mayor
    } else {
        derecha--;   // necesitamos una suma menor
    }
}
console.log(`la mejor pareja son ${pareja[0]} y ${pareja[1]}`) // CAMBIADO: console-log → console.log

if (izquierda >= derecha) {
    console.log("No se encontró ningún par que sume el objetivo.");
}