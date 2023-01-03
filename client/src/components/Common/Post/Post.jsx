import React from 'react';
import "./Post.css";
import { useState } from "react";
import { Comentarios } from '../Comentarios/Comentarios';
import { useNavigate } from "react-router-dom";

export function Post( { nome, texto, qtdLikes, comentarios } ) {
  
  const navigate = useNavigate();

  const [like, setLike] = useState(qtdLikes);

  function contaLike() {
    if(qtdLikes >= 1){
      setLike(qtdLikes + 1);
      console.log("algo")
    } else {
      setLike(qtdLikes);
    }
  }

	return (
    <div className="post">
      <div className="dados">
        <h1 className="nome">{nome}</h1>
      </div>
      <div className="mensagem">
			  <p className="texto">{texto}</p>
      </div>
      <div className="likes">
        <h3 className="qtdLikes">{qtdLikes} likes</h3>
        <button className="button" onClick={contaLike}>curtir</button>
      </div>

      {/* <div className="comentarios">
        <div className="comentarios-usuario">
          <h3 className="usuario">{usuario}:</h3>
          <p>{comentario}</p>
        </div>

        <div className="comentarios-adicionar">
          <input placeholder="adicione um novo comentario"/>
          <button className="button" >enviar</button>
        </div> */}

        <div className="comentarios">
          {comentarios.map(({ id, usuario, texto }) => (
            <Comentarios nome={usuario.nome} mensagem={texto} key={id} />
          ))}

        <form className="comentarios-adicionar" onSubmit={() => navigate("/")}>
          <textarea placeholder="adicione um novo comentario " />
          <input type="submit" value="Enviar" />
        </form>
        
      </div>
    </div>
  )
}