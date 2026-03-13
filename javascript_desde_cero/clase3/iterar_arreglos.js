console.log("Iterando arreglos con for------------------");
const animales = ["🐕‍🦺", "🐺", "🐞", "🐳"];

for (let i = 0; i < animales.length; i++) {
    console.log(animales[i]);
}

//es equivalente a
console.log("usando if's------------------");

let i = 0
if(i < animales.length){ //animales.length = 4
    console.log(animales[i]);
    i ++;
}
//i = 1
if(i < animales.length){ //animales.length = 4
    console.log(animales[1]); //i = 1
    i ++;
}

//i = 2
if(i < animales.length){ //animales.length = 4
    console.log(animales[2]); //i = 2
    i ++;
}

//i = 3
if(i < animales.length){ //animales.length = 4
    console.log(animales[3]); //i = 3
    i ++;
}

//i = 4
if(i < animales.length){ //animales.length = 4
    console.log(animales[4]); //i = 4
    i ++;
}

