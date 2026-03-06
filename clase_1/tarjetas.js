//arreglo de objetos (contactos)
const contactos = [
  {
    nombre: "Vasty",
    puesto: "Desarrolladora frontend",
    empresa: "studio ghibli",
    correo: "vasty@ghibli.com",
    telefono: "55-1234-5678"
  },
  {
    nombre: "juan perez",
    puesto: "desarrollador ",
    empresa: "empresa ABC",
    correo: "juan@empresabc.com",
    telefono: "555-123-4567"
  },
  {
    nombre: "ximena min",
    puesto: "Designer",
    empresa: "study bloc",
    correo: "min@studybloc.com",
    telefono: "55-2368-2957"
  }
];

// funcion de flecha para generar la tarjeta
const generartarjeta = (contacto) => {
  return `

*************************************
     TARJETA DE PRESENTACION
*************************************
*  Nombre:    ${contacto.nombre}     
*  Puesto:    ${contacto.puesto}          
*  Empresa:   ${contacto.empresa}         
*  Correo:    ${contacto.correo}          
*  Telefono: ${contacto.telefono}         
*************************************


  `;
};

// mostrar las tarjetas 
console.log("TARJETAS DE CONTACTOS \n");

for (let i = 0; i < contactos.length; i++) {
  console.log(generartarjeta(contactos[i]));
}
