function calcularCosto(destino, transporte) {
    const costosDestino = {
        "tlaxcala": 500,
        "apizaco": 450,
        "guadalajara": 400,
        "guanajuato": 800, 
        "aguascalientes": 600,
        "tlaxacala": 500,   
        "guanajuato": 800    
    };
    
    const costosTransporte = {
        "Avion": 300,
        "Tren": 150,
        "Autobús": 80
    };
    
    const costoBase = costosDestino[destino] || 500;
    const costoTransporte = costosTransporte[transporte] || 200;
    
    return costoBase + costoTransporte;
}

function calcularDescuento(costoTotal, personas) {
    let descuento = 0;
    
    if (personas >= 5 && personas <= 8) {
        descuento = costoTotal * 0.10;
        console.log(` Descuento del 10% por grupo (${personas} personas)`);
    } else if (personas > 8) {
        descuento = costoTotal * 0.20;
        console.log(` Descuento del 20% por grupo grande (${personas} personas)`);
    }
    
    return descuento;
}

module.exports = {
    calcularCosto,
    calcularDescuento  
};