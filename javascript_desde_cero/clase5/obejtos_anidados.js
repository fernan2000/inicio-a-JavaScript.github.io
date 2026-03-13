//objeto anidado
const empresa = {
    nombre: "Techcorp",
    empleados: { jefe: "itzel"}
}
console.log(empresa.empleados)
console.log(`la empresa se llama ${empresa.nombre}y el jefe es ${empresa.empleados.jefe}`)
        
//destructuracion
const persona = {
    nombre: "vatyy",
    edad: 20,
}
//es equivalente a .....
let {nombre} = persona;
console.log(nombre)

//destructuracion con multiples propiedades
let { edad, profesion} = persona
console.log(nombre, edad, profesion);
