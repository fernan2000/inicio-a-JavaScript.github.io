const avengers = [
  { name: 'iron man', age: 85, movies: ['iron man', 'avengers'] },
    { name: 'captain america', age: 100, movies: ['captain america', 'avengers'] },
    { name: 'thor', age: 1500, movies: ['thor', 'avengers'] },
    { name: 'hulk', age: 49, movies: ['hulk', 'avengers'] },
    { name: 'black widow', age: 35, movies: ['black widow', 'avengers'] },
    { name: 'hawkeye', age: 40, movies: ['hawkeye', 'avengers'] }
];

console.log(avengers[2].movies[1])
//accediendo a la pelicula de thor
const rocky_movies = {
    rocky: {
        "year": 1976,
        "director": "John G. Avildsen"
    },
    rocky2: {
        "year": 1979,
        "director": "Sylvester Stallone"
    },
    rocky3: {
        "year": 1982,
        "director": "Sylvester Stallone"
    }
}

console.log(rocky_movies["rocky3"].year)

//crear un objeto con continentes y mas
const tierra = {
    continentes: {
    "america": {
        "mexico": {
            estado: [
                "tlaxcala",
                "puebla",
                "tlaxcala",
                "huamantla",
                "apizaco"
            ]
        },
        "japon": {
            estados: [
                "tokio",
                "kioto",
                "osaka",
                "nara",
                "hiroshima"
            ]
        },

        "italia": {
            estados: [
                "roma",
                "milano",
                "napoles",
                "venecia",
                "florencia"
            ]
        },
        "tailandia": {
            estados: [
                "bangkok",
                "chiang mai",
                "phuket",
                "pattaya",
                "ayutthaya"
            ]
        }
    }
    },
    listarContinentes() {
        console.log (`continentes ${Object.keys(this.continentes)}`)
    },
    paises() {
        console.log(`paises: ${Object.keys(this.continentes.america)}`)
    },
    estados() {
        for (let pais in this.continentes.america) {
            const estadosPais = this.continentes.america[pais].estado || this.continentes.america[pais].estados
            if (estadosPais) {
                console.log(`estados de ${pais}: ${estadosPais.join(', ')}`)
            }
        }
    },
};

tierra.listarContinentes()
tierra.paises()
tierra.estados()