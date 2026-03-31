function findMax(arr) {

    if (arr.length === 1) return arr[0]; //caso base
    const mid = Math.floor(arr.length / 2);
    const leftMax = findMax(arr.slice(0, mid));
    const rightMax = findMax(arr.slice(mid));
    return leftMax > rightMax ? leftMax : rightMax; // combinar

}

// Uso

const numbers = [3, 7, 2, 9, 5];
console.log(findMax(numbers)); // Salida: 9