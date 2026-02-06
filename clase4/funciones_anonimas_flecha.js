//funcion normal
function funcion_normal(a, b)   {
    return a + b;
}
//funcion como variable
let funcion_como_variable = function(a, b) {
    //console.log("a")
    //console.log("b")
    return a + b;
}
//funciones flechas
let funcion_flecha = (a, b) => {
    return a + b;
}

//funciones en una sola linea se simplifican
let funcion_simplificada = (a, b) => a + b;

//funciones  con un solo parametro no necesita parentesis
let funcion_con_un_parametro = a => a * b;

console.log(funcion_normal(2,3))
console.log(funcion_como_variable(2,3))
console.log(funcion_flecha(2,3))
console.log(funcion_simplificada(2,3))
console.log(funcion_con_un_parametro(2))