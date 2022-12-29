function render (usuario){
    return {
        id: usuario._id,
        nome: usuario.nome,
        email: usuario.email
    }
}

function renderMany(usuarios){
    return usuarios.map(render);
}

module.exports.render = render;
module.exports.renderMany = renderMany;