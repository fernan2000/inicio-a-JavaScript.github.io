// En el Castillo Ambulante, Howl necesita encontrar el primer par de clientes
// consecutivos cuyos nombres comienzan con la misma letra para ofrecerles
// un descuento especial.

const clientes = [
    "Sophie Hatter",
    "Howl Jenkins",
    "Calcifer",
    "Madame Suliman",
    "Markl",
    "Letty Hatter",
    "Príncipe Justin"
];

// 1. inicializar los dos punteros
let izquierda = 0;
let derecha = 1;  // No es length-1, es el siguiente elemento
let letra1 = "";
let letra2 = "";
let pareja = [];

// 2. Mientras izquierda sea menor que derecha Y derecha sea menor que la longitud:
while (izquierda < derecha && derecha < clientes.length) {
    // 2.1 obtener la primera letra de cada nombre
    letra1 = clientes[izquierda][0];
    letra2 = clientes[derecha][0];
    
    // 2.2 si las letras son iguales, encontramos el par
    if (letra1 === letra2) {
        console.log(`Par encontrado: ${clientes[izquierda]} y ${clientes[derecha]}`);
        pareja = [clientes[izquierda], clientes[derecha]];
        break;
    }
    
    // 2.3 avanzamos ambos punteros
    if (letra1 !== letra2) {
        izquierda++;
        derecha++;
    }
}

if (pareja.length === 0) {
    console.log("No se encontró ningún par de clientes con la misma letra inicial.");
}