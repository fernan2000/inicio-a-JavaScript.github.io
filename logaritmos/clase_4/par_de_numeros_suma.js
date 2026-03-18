//quiero encontrar 2 numeros en el arreglo arr que al sumarlos de 35
let arr = [1, 5, 7, 33, 2, 86, 10, 9, 14]
let objetivo = 35

//inicialixar los dos punteros
let izquierda = 0
let derecha = arr.length - 1
let suma = 0
//mientas izquierda sea mentor de derecha:
while(izquierda < derecha){

//clacula la suma de los elementos en las  posiiones izquierxda y derecha
suma = arr[izquierda] + arr[derecha]
//si al sumar es igual al valor objetivo,encontraremos el par y nos detenemos
if (suma == objetivo) {
    console.log(`par encontrado! ${arr[izquierda]} y ${arr[derecha]}`)
    break
}
// si la suma es menor que el valor objetivo,moverlos el punto izquierda una posiciona la derecha
if(suma < objetivo){
    izquierda++
}
// si la suma es mayor que el valor objetivo,moverlos el punto derecha una posiciona la izquierda
if(suma > objetivo){
    derecha--
}

}
