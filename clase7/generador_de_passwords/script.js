const generate_btn = document.querySelector("#generate_btn")
const password_range = document.querySelector("#password_range")
const uppercase_checkbox = document.querySelector("#uppercase_checkbox")
const numbers_checkbox = document.querySelector("#numbers_checkbox")
const symbols_checkbox = document.querySelector("#symbols_checkbox")
const generated_password = document.querySelector("#generated_password")
const length_span = document.querySelector("#length_span")  // CAMBIADO: length_value -> length_span
const strength_span = document.querySelector("#strength_span")

// Actualizar el valor de la longitud cuando se mueve el slider
password_range.addEventListener("input", () => {
    length_span.textContent = password_range.value  // CAMBIADO: length_value -> length_span
})

generate_btn.addEventListener("click", () => {
    console.log("presione el control")
    
    const result = generate_password(
        Number(password_range.value),
        uppercase_checkbox.checked,
        numbers_checkbox.checked,
        symbols_checkbox.checked
    )
    generated_password.innerHTML = result
    
    // Actualizar la fortaleza
    update_strength(result)
})

// Función para actualizar la fortaleza de la contraseña
const update_strength = (password) => {
    let strength = "LOW"
    const length = password.length
    
    if (length >= 10) {
        if (uppercase_checkbox.checked && numbers_checkbox.checked && symbols_checkbox.checked) {
            strength = "HIGH"
        } else {
            strength = "MEDIUM"
        }
    } else if (length >= 6) {
        strength = "MEDIUM"
    }
    
    strength_span.textContent = strength
}

const generate_password = (length, uppercase, numbers, symbols) => {
    console.log(`
        Generando una contraseña de longitud ${length},
        con mayusculas: ${uppercase},
        con numeros: ${numbers},
        con simbolos: ${symbols}
    `);
    
    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numbersChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const symbolsChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '?'];
    
    let chars = [];
    chars = chars.concat(lowercase);
    
    if (uppercase) {
        chars = chars.concat(uppercaseChars);
    }
    if (numbers) {
        chars = chars.concat(numbersChars);
    }
    if (symbols) {
        chars = chars.concat(symbolsChars);
    }
    
    if (chars.length === 0) {
        chars = lowercase;
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        const randomChar = chars[randomIndex];
        password = password + randomChar;
    }
    
    return password;
}