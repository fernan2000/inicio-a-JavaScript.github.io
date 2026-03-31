const fs = require('fs')

const filePath = './ejemplo.json'

const obj = {
    name: "Mackaber",
    age: 34,
    profession: "programmer"
}


fs.writeFileSync(filePath, obj_json)
fs.appendFileSync(filePath, obj_json)

const obj_json = JSON.stringify(obj)
console.log(obj_json)
fs.writeFileSync(filePath, obj_json)

const data = fs.readFileSync(filePath, 'utf8')
const obj_leido = JSON.parse(data)

file_obj.age = file_obj.age + 1
const file_obj = JSON.stringify(file_obj)
fs.writeFileSync(filePath, file_obj)
console.log(filePath, file_obj)