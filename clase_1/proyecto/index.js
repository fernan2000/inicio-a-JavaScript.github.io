const { registrarDestino, mostrarItinerario, obtenerDestinos } = require('./viajes.js');
const { calcularCosto, calcularDescuento } = require('./calculos.js');

//costo total
const mostrarCostos = () => {
    const destinos = obtenerDestinos();
    let costoTotalGlobal = 0;
    
    console.log("\n💰 RESUMEN DE COSTOS");
    console.log("═════════════════════");
    
    destinos.forEach((viaje, index) => {
        const costoBase = calcularCosto(viaje.destino, viaje.transporte);
        const descuento = calcularDescuento(costoBase, viaje.personas || 1);
        const costoFinal = costoBase - descuento;
        
        console.log(`
Viaje ${index + 1}: ${viaje.destino}
  Costo base:     $${costoBase}
  Descuento:      -$${descuento}
  Total a pagar:  $${costoFinal}
        `);
        
        costoTotalGlobal += costoFinal;
    });
    
    console.log(` COSTO TOTAL DE TODOS LOS VIAJES: $${costoTotalGlobal}`);
};

//funcion principal de ejecucion
const iniciarApp = () => {
    console.log(" PLANIFICADOR DE VIAJES");
    console.log("*********************************");
    
    //guarde el numero de personas
    registrarDestino("tlaxacala", "2024-12-20", "Avion");
    //agregamos personas manualmente (opcional)
    const destinos = obtenerDestinos();
    destinos[0].personas = 2;
    
    registrarDestino("guadalajara", "2025-03-15", "Avion");
    destinos[1].personas = 1;
    
    registrarDestino("guanajuato", "2024-10-05", "Tren");
    destinos[2].personas = 6;
    
    //mostrar itinerario
    mostrarItinerario();
    mostrarCostos();
};
iniciarApp();