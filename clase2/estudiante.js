// declaramos la variable nota (puedes cambiar el valor para probar)
let nota = 75;

// verificamos que la nota sea un valor válido
if (nota > 0) {

  // Si es 90 o mas
  if (nota >= 90) {
    console.log("La nota es: " + nota + " - Excelente");

  // Si esta entre 75 y 89
  } else if (nota >= 75 && nota <= 89) {
    console.log("La nota es: " + nota + " - Bien");

  // Si esta entre 60 y 74
  } else if (nota >= 60 && nota <= 74) {
    console.log("La nota es: " + nota + " - Suficiente");

  // Si es menor a 60
  } else {
    console.log("La nota es: " + nota + " - No aprueba");
  }

} else {
  console.log("La nota debe ser mayor que 0");
}
