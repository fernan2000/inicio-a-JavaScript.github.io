const generate_btn = document.querySelector("#generate_btn")
const password_range = document.querySelector("#password_range")
const uppercase_checkbox = document.querySelector("#uppercase_checkbox")
const numbers_checkbox = document.querySelector("#numbers_checkbox")
const symbols_checkbox = document.querySelector("#symbols_checkbox")
const generated_password = document.querySelector("#generated_password")

generate_btn.addEventListener("click", () => {
    console.log("presione el control")
    
    const result = generate_password(
        password_range.value,  
        uppercase_checkbox.checked,
        numbers_checkbox.checked,
        symbols_checkbox.checked
    )
    generated_password.innerHTML = result 
})

const generate_password = (length, uppercase, numbers, symbols) => {
    // Imprimir en la consola que parametros recibio la funcion
    console.log(`
        Generando una contraseña de longitud ${length},
        con mayusculas: ${uppercase},
        con numeros: ${numbers},
        con símbolos: ${symbols}
    `);
}