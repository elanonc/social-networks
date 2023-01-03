import { useContext, useEffect, useState } from "react";
import { fetchPosts } from "../../../api/posts.api";
import { authContext } from "../../../App";

import "./LinhaDoTempo.css";
import {Post} from "../Post/Post";

export function LinhaDoTempo() {

  let [posts, setPosts] = useState([]);
  let auth = useContext(authContext);

  // let infoPost = [
  //   {
  //     id: 1,
  //     nomeUsuario: "João",
  //     texto:"Menino, tá quente demais hoje",
  //     qtdLikes: 1, 
  //     comentario: "vdd viu",
  //     usuarioQueComentou: "vv"
	// 	},
  //   {
	// 		id: 2,
  //     nomeUsuario: "Maria",
  //     texto:"Num aguento mais essa quintura",
  //     qtdLikes: 2, 
  //     comentario: "to pa morrer",
  //     usuarioQueComentou: "gal"
  //   },
  //   {
	// 		id: 3,
  //     nomeUsuario: "Michel",
  //     texto:"Calor",
  //     qtdLikes: 28, 
  //     comentario: "alo donos da bala",
  //     usuarioQueComentou: "tyler d creator",
  //     horaDoComentario: "07:40"
  //   },
  //   {
	// 		id: 4,
  //     nomeUsuario: "Mariana",
  //     texto:"Temperatura",
  //     qtdLikes: 29, 
  //     comentario: "arriegua",
  //     usuarioQueComentou: "yai"
  //   },
  //   {
	// 		id: 5,
  //     nomeUsuario: "KSCERATO",
  //     texto:"furia",
  //     qtdLikes: 27, 
  //     comentario: "dia de furia",
  //     usuarioQueComentou: "elenonc"
  //   }
  // ]

  useEffect(() => {
    fetchPosts(auth.token)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

	return (
  	<div className="posts">
      {posts.map(({ id, texto, likes }) => (
        <Post nome={"teste"} mensagem={texto} qtdLikes={likes} key={id}
              comentarios={[
                {
                  id: 1,
                  texto: "Vamo Brasil",
                  usuario: {
                    id: 1,
                    nome: "Neymar",
                  },
                },
              ]}
        />
      ))}
    </div>
  )
}