const view_usuario = require("./usuario.view");
const view_post = require("./post.view");

function render (comentario){
    return {
        id: comentario._id,
        text: comentario.texto,
        id_usuario: view_usuario.render(comentario.id_usuario),
        id_post: view_post.render(comentario.id_post)
    }
}

function renderMany (comentarios){
    return comentarios.map(render);
}

module.exports.render = render;
module.exports.renderMany = renderMany;