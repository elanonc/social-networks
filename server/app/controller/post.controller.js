const Post = require("../model/post.model");
const Comentario = require("../model/comentario.model");

const jwt = require("jsonwebtoken");

const view_post = require("../view/post.view");

module.exports.inserirPost = function(req, res){
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let usuario_id_token = payload.id;
    
    let post = new Post ({
        texto: req.body.texto,
        likes: req.body.likes,
        id_usuario: usuario_id_token
    })

    let promise = Post.create(post);
    promise.then(
        function(post){
            res.status(201).json(view_post.render(post));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.listarPosts = function(req, res) {
    let promise = Post.find().exec();
    promise.then(
        function(posts){
            res.status(200).json(view_post.renderMany(posts));
        }
    ).catch(
        function(error){
            res.status(400).json(error);
        }
    )
}

module.exports.obterPost = function(req, res){
    let id = req.params.id;
    let promise = Post.findById(id).exec();
    promise.then(
        function(post){
            res.status(200).json(view_post.render(post));
        }
    ).catch(
        function(error){
            res.status(404).json(error);
        }
    )
}

module.exports.obterComentariosDoPost = function(req, res){
    let id = req.params.id;
    let promise = Comentario.find({ post: id }).exec();
    
    promise.then(
        function(comentarios){
            res.status(200).json(comentarios);
        }
    ).catch(
        function(error){
            res.status(404).json(error);
        }
    )
}

module.exports.deletarPost = function(req, res){
    let id = req.params.id;
    let promise = Post.findById(id).exec();

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let usuario_id_token = payload.id;

    promise.then(
        function(post){
            if(post.id_usuario == usuario_id_token){
                Post.findByIdAndDelete(id).exec().then(
                    function(post_){
                        res.status(200).json(view_post.render(post_));
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