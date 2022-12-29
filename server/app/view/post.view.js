function render(post){
    return {
        id: post._id,
        text: post.texto,
        likes: post.likes,
        id_usuario: post.id_usuario
    }
}

function renderMany(posts){
    return posts.map(render);
}

module.exports.render = render;
module.exports.renderMany = renderMany;