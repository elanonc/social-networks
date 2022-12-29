const Comentario = require("../model/comentario.model");
const view_comentario = require("../view/comentario.view");

const jwt = require("jsonwebtoken");

module.exports.inserirComentario = function(req, res){
    
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let usuario_id_token = payload.id;
    
    let comentario = new Comentario ({
        texto: req.body.texto,
        id_usuario: usuario_id_token,
        id_post: req.body.id_post
    });

    let promise = Comentario.create(comentario);
    promise.then(
        function(comentario){
            res.status(201).json(view_comentario.render(comentario));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.obterComentarios = function(req, res){
    let promise = Comentario.find().exec();
    
    promise.then(
        function(comentarios){
            res.status(200).json(view_comentario.renderMany(comentarios));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.deletarComentario = function(req, res){
    let id = req.params.id;
    let promise = Comentario.findById(id).exec();

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let usuario_id_token = payload.id;

    promise.then(
        function(comentario){
            if(comentario.id_usuario == usuario_id_token){
                Comentario.findByIdAndDelete(id).exec().then(
                    function(comentario_){
                        res.status(200).json(view_comentario.render(comentario_));
                    }
                ).catch(function(error){
                    res.status(404).json(error);
                });
            }else{
                res.status(404).json("Não autorizado!!!");
            }
        }
    ).catch(
        function(error){
            res.status(404).json(error);
        }
    )
}

module.exports.obterComentariosDoPost = function(req, res){
    let id = req.params.id;
    let aaa = Comentario.find({ id_post: id }).exec();
    let promise = Comentario.find({ id_post: id }).exec();

    promise.then(
        function(comentarios){
            res.status(200).json(view_comentario.renderMany(comentarios));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}