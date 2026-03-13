const comment_input = document.getElementById('comment_input');
const save_button = document.getElementById('save_button');
const comment_box = document.getElementById('comment_box');

save_button.addEventListener('click', () => {
    const comment = comment_input.value;

    // esto borra el cam´po de txto
    
    comment_input.value = ""

    comentarios.push(comment)

    // guardar en local 
    const comentarios_json = JSON.stringify(comentarios)
    localStorage.setItem("comentarios", comentarios_json)
    
    render_comments(comentarios)
})

const render_comments = (comments) => { // comments = [...]
    // limpiar 
    comment_box.innerText = ""
    for(let i=0; i < comments.length; i++) {
        const commentElement = document.createElement('p');
        commentElement.textContent = comments[i];

        comment_box.appendChild(commentElement);
    }
}

// Leer de local storage
const comentarios_json = localStorage.getItem("comentarios")
comentarios = JSON.parse(comentarios_json)
render_comments(comentarios)