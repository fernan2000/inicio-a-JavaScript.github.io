//encontrar la palabra más larga en un texto usando Sliding Window

let texto = "Se oye el maullido de un triste gato viudo";

// 1. dividir el texto en palabras
let palabras = texto.split(' ');
console.log("Palabras:", palabras);

// 2.inicializar los punteros
let izquierda = 0;
let palabraMasLarga = palabras[0];  



// 3.puntero derecho recorre todas las palabras
for (let derecha = 1; derecha < palabras.length; derecha++) {
    
    console.log(`\ncomparando: "${palabras[izquierda]}" (${palabras[izquierda].length}) vs "${palabras[derecha]}" (${palabras[derecha].length})`);
    
    //comparar si la letra es la mas larga
    if (palabras[derecha].length > palabraMasLarga.length) {
        palabraMasLarga = palabras[derecha];
        izquierda = derecha; 
        console.log(` nueva palabra mas larga encontrada `);
    } else {
        console.log(` la palabra "${palabras[izquierda]}" sigue siendo mas larga`);
    }
}

// 4. Mostrar el resultado final
console.log("\n" + "=".repeat(40));
console.log(` texto original: "${texto}"`);
console.log(` la palabra mas larga es: "${palabraMasLarga}"`);
console.log(` longitud: ${palabraMasLarga.length} caracteres`);