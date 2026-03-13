// seleccionar elementos con dom
const comentarioInput = document.querySelector("#comentario_input");
const agregarBtn = document.querySelector("#agregar_btn");
const listaComentarios = document.querySelector("#lista_comentarios");

// fecha actual
function obtenerFecha() {
    const ahora = new Date();
    return ahora.toLocaleString();
}

// evento click para agregar comentario
agregarBtn.addEventListener("click", () => {
    // validar
    if (comentarioInput.value === "") {
        alert("Escribe un comentario");
        return;
    }
    
    // Crear comentarios
    const nuevoComentario = document.createElement("p");
    
    // texto del cometario con su fecha
    nuevoComentario.innerHTML = `💬 ${comentarioInput.value} <br> <small>📅 ${obtenerFecha()}</small>`;
    
    // estrlios como css directo
    nuevoComentario.style.backgroundColor = "#4d9573";
    nuevoComentario.style.padding = "10px";
    nuevoComentario.style.borderRadius = "5px";
    nuevoComentario.style.marginBottom = "10px";
    



    // boton para eliminar
    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.style.marginLeft = "10px";
    
    // evento para eliminar el comentario
    eliminarBtn.addEventListener("click", () => {
        nuevoComentario.remove();  // COMO TU appendChild pero al revés
    });
    


    // agregar el comentario con boton y luego a la lista
    nuevoComentario.appendChild(eliminarBtn);
    listaComentarios.appendChild(nuevoComentario);
    





    // limpiar input
    comentarioInput.value = "";
});

// agregar comentario con enter
comentarioInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        agregarBtn.click();
    }
});