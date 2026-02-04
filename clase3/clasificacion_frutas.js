// Declara un arreglo llamado frutas con varios tipos de frutas
const frutas = ["🥭","🥝","🍌","🍉","🍎","🍓","🍒","🍐","🥭","🍌","🍉","🍌"];

// Crea un objeto para almacenar la cantidad de cada tipo de fruta
const contadorFrutas = {
    "🥭": 0,
    "🥝": 0,
    "🍌": 0,
    "🍉": 0,
    "🍎": 0,
    "🍓": 0,
    "🍒": 0,
    "🍐": 0
};

// Usa un ciclo for para recorrer el arreglo y contar las frutas
console.log("usando for------------------");

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === "🥭") {
        contadorFrutas["🥭"] = contadorFrutas["🥭"] + 1;
    }
    if (frutas[i] === "🥝") {
        contadorFrutas["🥝"] = contadorFrutas["🥝"] + 1;
    }
    if (frutas[i] === "🍌") {
        contadorFrutas["🍌"] = contadorFrutas["🍌"] + 1;
    }
    if (frutas[i] === "🍉") {
        contadorFrutas["🍉"] = contadorFrutas["🍉"] + 1;
    }
    if (frutas[i] === "🍎") {
        contadorFrutas["🍎"] = contadorFrutas["🍎"] + 1;
    }
    if (frutas[i] === "🍓") {
        contadorFrutas["🍓"] = contadorFrutas["🍓"] + 1;
    }
    if (frutas[i] === "🍒") {
        contadorFrutas["🍒"] = contadorFrutas["🍒"] + 1;
    }
    if (frutas[i] === "🍐") {
        contadorFrutas["🍐"] = contadorFrutas["🍐"] + 1;
    }
}

// Imprime en la consola la cantidad de cada tipo de fruta
console.log("🥭: " + contadorFrutas["🥭"]);
console.log("🥝: " + contadorFrutas["🥝"]);
console.log("🍌: " + contadorFrutas["🍌"]);
console.log("🍉: " + contadorFrutas["🍉"]);
console.log("🍎: " + contadorFrutas["🍎"]);
console.log("🍓: " + contadorFrutas["🍓"]);
console.log("🍒: " + contadorFrutas["🍒"]);
console.log("🍐: " + contadorFrutas["🍐"]);

// Intenta implementar la solución con el otro ciclo también (while)
console.log("\nusando while------------------");

// Reiniciar el objeto (puedes usar el mismo nombre o diferente)
const contador = {
    "🥭": 0,
    "🥝": 0,
    "🍌": 0,
    "🍉": 0,
    "🍎": 0,
    "🍓": 0,
    "🍒": 0,
    "🍐": 0
};

let j = 0;
while (j < frutas.length) {
    if (frutas[j] === "🥭") {
        contador["🥭"] = contador["🥭"] + 1;
    }
    if (frutas[j] === "🥝") {
        contador["🥝"] = contador["🥝"] + 1;
    }
    if (frutas[j] === "🍌") {
        contador["🍌"] = contador["🍌"] + 1;
    }
    if (frutas[j] === "🍉") {
        contador["🍉"] = contador["🍉"] + 1;
    }
    if (frutas[j] === "🍎") {
        contador["🍎"] = contador["🍎"] + 1;
    }
    if (frutas[j] === "🍓") {
        contador["🍓"] = contador["🍓"] + 1;
    }
    if (frutas[j] === "🍒") {
        contador["🍒"] = contador["🍒"] + 1;
    }
    if (frutas[j] === "🍐") {
        contador["🍐"] = contador["🍐"] + 1;
    }
    j = j + 1;
}

// Imprimir cada tipo de fruta
console.log("🥭: " + contador["🥭"]);
console.log("🥝: " + contador["🥝"]);
console.log("🍌: " + contador["🍌"]);
console.log("🍉: " + contador["🍉"]);
console.log("🍎: " + contador["🍎"]);
console.log("🍓: " + contador["🍓"]);
console.log("🍒: " + contador["🍒"]);
console.log("🍐: " + contador["🍐"]);