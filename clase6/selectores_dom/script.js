const parrafo = document.querySelector("p");

parrafo.textContent = "Hola mundo desde JS";
parrafo.innerText = "Hola mundo desde JS";
parrafo.style.color = "red";

//agregar un nuevo elemento al DOM
const nuevoComentario = document.createElement("p");
nuevoComentario.textContent = "Este es un nuevo comentario";
document.body.appendChild(nuevoComentario);

//agregando un eventlistener a un boton
const boton = document.querySelector("button");

boton.addEventListener("click", () => {
    alert("Hola mundo desde el boton");
});

let html =
    `<div>
        <h1>titulo</h1>
        <img src="https://i.pinimg.com/736x/c9/6d/05/c96d054e40fbed865c51aab813b438c5.jpg">
    </div>`;

    tabla.innerText = html