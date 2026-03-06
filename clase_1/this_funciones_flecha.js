// Funcion tradicional
function funcion_tradicional() {
    return "Hola ";  
}

// Funcion flecha 
const funcion_flecha = () => {
    return "función flecha";
}

console.log(funcion_tradicional()); 
console.log(funcion_flecha());       

const obj = {
    name: "Objeto",
    fn_tradicional: function() {
        return this.name;
    },
    fn_flecha: () => {
        return this.name;
    }
}

console.log(obj.fn_tradicional()); 
console.log(obj.fn_flecha());       
console.log(obj);                   