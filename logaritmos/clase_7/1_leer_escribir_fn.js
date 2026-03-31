const fs = require('fs')
const filePath = './ejemplo.json'
const leer = () => {
    const file_content = fs.readFileSync(filePath, 'utf8')
    const file_obj = JSON.parse(file_content)
}

const escribir = (obj) => {}

// Leer
// Escribir
// Leer