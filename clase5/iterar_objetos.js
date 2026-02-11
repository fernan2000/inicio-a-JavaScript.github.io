let estudiante = {
    nombre: "vatyy",
    edad: 20,
    curso: "programacion",
}
for(key in estudiante){ 
    console.log(`La llave es: ${key}, y el valor es: ${estudiante[key]}`)
}
//es equivalente a......

console.log(`La llave es: ${"nombre"}, y el valor es: ${estudiante["nombre"]}`)
console.log(`La llave es: ${"apellido"}, y el valor es: ${estudiante["apellido"]}`)
console.log(`La llave es: ${"edad"}, y el valor es: ${estudiante["edad"]}`)
console.log(`La llave es: ${"curso"}, y el valor es: ${estudiante["curso"]}`)
