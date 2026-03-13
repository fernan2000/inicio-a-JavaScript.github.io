
// Lista 
const peliculas = [
    { id: 1, titulo: "miss night and day", imagen: "https://i.pinimg.com/1200x/b4/35/37/b435374608509b9627428df16fd5f5fa.jpg" },
    { id: 2, titulo: "The Witcher", imagen: "https://i.pinimg.com/736x/97/ea/cc/97eacc81372e08f612426c72974a47eb.jpg" },
    { id: 3, titulo: "sabrina", imagen: "https://i.pinimg.com/736x/72/0a/3d/720a3d83f34cf00a19a0282bdef462b0.jpg" },
    { id: 4, titulo: "matilda", imagen: "https://i.pinimg.com/1200x/fb/14/40/fb144078eccac3923284283c280e9efe.jpg" },
    { id: 5, titulo: "The Crown", imagen: "https://i.pinimg.com/736x/9d/51/c9/9d51c9e35f0f080c3fd83c18a1c30dbb.jpg" },
    { id: 6, titulo: "bella y bestia", imagen: "https://i.pinimg.com/736x/de/8e/38/de8e385538199b48a5c8fc3d5853f43f.jpg" },
    { id: 7, titulo: "walle", imagen: "https://i.pinimg.com/736x/aa/86/1f/aa861fdb41e3e6a74fd26805449ce7f7.jpg" },
    { id: 8, titulo: "marnie", imagen: "https://i.pinimg.com/736x/b7/47/f4/b747f401d56657e232f6fe2d408a0b5c.jpg" },
    { id: 9, titulo: "flow", imagen: "https://i.pinimg.com/1200x/2f/07/28/2f07281e0e1c22ad656a7b2ad94c7c86.jpg" },
    { id: 10, titulo: "grease", imagen: "https://i.pinimg.com/736x/cb/2d/76/cb2d76ea0b737f6438533363a62cf37f.jpg" }
    
];

// objeto para almacenar 
let comentariosPorPelicula = {};
peliculas.forEach(peli => {
    comentariosPorPelicula[peli.id] = [];
});

// variables del DOM
const contenedorPeliculas = document.getElementById('contenedorPeliculas');
const modal = document.getElementById('modalComentarios');
const cerrarModal = document.getElementById('cerrarModal');
const tituloPeliculaModal = document.getElementById('tituloPeliculaModal');
const areaComentarios = document.getElementById('areaComentarios');
const inputComentario = document.getElementById('inputComentario');
const btnAgregarComentario = document.getElementById('btnAgregarComentario');

let peliculaActualId = null; // ID de la pelicula abierta


function mostrarPeliculas() {
    peliculas.forEach(peli => {
        const div = document.createElement('div');
        div.className = 'pelicula';
        div.innerHTML = `
            <img src="${peli.imagen}" alt="${peli.titulo}">
            <p>${peli.titulo}</p>
        `;
        
        // al hacer click abre el modal
        div.addEventListener('click', () => abrirModal(peli));
        
        contenedorPeliculas.appendChild(div);
    });
}

//  modal de comentarios
function abrirModal(pelicula) {
    peliculaActualId = pelicula.id;
    tituloPeliculaModal.textContent = pelicula.titulo;
    mostrarComentarios();
    modal.style.display = 'block';
}

// mostrar comentarios de la pelicula actual
function mostrarComentarios() {
    if (!peliculaActualId) return;
    
    const comentarios = comentariosPorPelicula[peliculaActualId] || [];
    areaComentarios.innerHTML = '';
    
    if (comentarios.length === 0) {
        areaComentarios.innerHTML = '<p style="color: #888; text-align: center;">No hay comentarios aún. ¡Escribe el primero!</p>';
        return;
    }
    
    // mostrar comentarios orden inverso
    [...comentarios].reverse().forEach(com => {
        const div = document.createElement('div');
        div.className = 'comentario';
        div.dataset.id = com.id;
        div.innerHTML = `
            <div class="comentario-texto">${com.texto}</div>
            <div class="comentario-fecha">${com.fecha}</div>
            <div class="botones-comentario">
                <button class="boton-editar" data-id="${com.id}">✏️ Editar</button>
                <button class="boton-eliminar" data-id="${com.id}">🗑️ Eliminar</button>
            </div>
        `;
        
        // agregar eventos a los botones
        const btnEditar = div.querySelector('.boton-editar');
        const btnEliminar = div.querySelector('.boton-eliminar');
        
        btnEditar.addEventListener('click', () => editarComentario(com.id));
        btnEliminar.addEventListener('click', () => eliminarComentario(com.id));
        
        areaComentarios.appendChild(div);
    });
}
function agregarComentario() {
    const texto = inputComentario.value.trim();
    if (!texto) {
        alert('Escribe algo en el comentario');
        return;
    }
    if (!peliculaActualId) return;
    
    const fecha = new Date();
    const fechaFormateada = `${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}`;
    
    const nuevoComentario = {
        id: Date.now(), 
        texto: texto,
        fecha: fechaFormateada
    };
    
    comentariosPorPelicula[peliculaActualId].push(nuevoComentario);
    inputComentario.value = ''; 
    mostrarComentarios(); 
}

// eliminar comentario
function eliminarComentario(idComentario) {
    if (!confirm('¿eliminar comentario?')) return;
    
    comentariosPorPelicula[peliculaActualId] = comentariosPorPelicula[peliculaActualId].filter(
        com => com.id !== idComentario
    );
    mostrarComentarios();
}

// Editar comentario
function editarComentario(idComentario) {
    const comentarios = comentariosPorPelicula[peliculaActualId];
    const comentario = comentarios.find(com => com.id === idComentario);
    
    const nuevoTexto = prompt('edita el comentario:', comentario.texto);
    if (nuevoTexto !== null && nuevoTexto.trim() !== '') {
        comentario.texto = nuevoTexto.trim();
        // actualizar fecha
        const fecha = new Date();
        comentario.fecha = `${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()} (editado)`;
        mostrarComentarios();
    }
}

// cerrar modal
cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
    peliculaActualId = null;
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        peliculaActualId = null;
    }
});

btnAgregarComentario.addEventListener('click', agregarComentario);

// permitir agregar con Enter
inputComentario.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarComentario();
    }
});

mostrarPeliculas();