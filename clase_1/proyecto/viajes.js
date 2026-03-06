const destinos = [];

function registrarDestino(destino, fecha, transporte) {
    destinos.push({ destino, fecha, transporte });
}
function mostrarItinerario() {
    console.log("Itinerario de viajes:");
    destinos.forEach((viaje, index) => {
        console.log(`${index + 1}. ${viaje.destino} - ${viaje.fecha} - ${viaje.transporte}`);
    });
}

//obtener destinos
function obtenerDestinos() {
    return destinos;
}
module.exports = {
    registrarDestino,
    mostrarItinerario,
    obtenerDestinos
};