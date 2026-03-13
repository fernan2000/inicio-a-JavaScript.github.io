const avengers = [
  { name: 'iron man', age: 85, movies: ['iron man', 'avengers'] },
    { name: 'captain america', age: 100, movies: ['captain america', 'avengers'] },
    { name: 'thor', age: 1500, movies: ['thor', 'avengers'] },
    { name: 'hulk', age: 49, movies: ['hulk', 'avengers'] },
    { name: 'black widow', age: 35, movies: ['black widow', 'avengers'] },
    { name: 'hawkeye', age: 40, movies: ['hawkeye', 'avengers'] }
];

//1.- en el arreglo se encuentra iron man?...
const incluyeIronMan = avengers.some(elemento => elemento.name == "iron man")
console.log(incluyeIronMan)

 //2.- si exite tor en movies.....

let character = {
        name: 'thor', age: 1500, movies: ['thor', 'avengers'] ,

}
let incluyethor = character.movies.includes("thor")
console.log(incluyethor)

incluyethor = avengers.some((character) =>  character.movies.includes("thor"))
console.log(incluyethor)

//cual es el avenger mas viejo

let character1 =     { name: 'thor', age: 1500, movies: ['thor', 'avengers'] }
console.log(character1.age)

let character2 =   { name: 'iron man', age: 85, movies: ['iron man', 'avengers'] }
console.log(character1.age > character2.age)



let max = avengers.reduce((anteriorcharacteredad, character ) => {
    if (anteriorcharacteredad.age > character.age) {
        return anteriorcharacteredad
    } else {
        return character
    }
}, )
console.log(max.name)



max = avengers.reduce((anteriorcharacteredad, character ) => 
    anteriorcharacteredad.age > character.age ? anteriorcharacteredad :character)

console.log(max.name)

