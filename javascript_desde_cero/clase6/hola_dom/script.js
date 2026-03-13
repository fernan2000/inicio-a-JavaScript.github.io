const nombre = document.querySelector("#nombre");
const enviar_btn = document.querySelector("#enviar_btn");
const saludo = document.querySelector("#saludo");

enviar_btn.addEventListener("click", () => {

    //imprimir en la consola
    console.log(nombre.value)
    saludo.innerHTML = `Hola ${nombre.value}`;
});