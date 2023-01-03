import React from 'react';
import "./Comentarios.css";
// import { useState } from "react";

export function Comentarios({ nome, mensagem }) {

	return (
    <div className="card">
      <h1 className="nome">{nome}</h1>
      <p className="comentario">{mensagem}</p>
      {/* <div className="mensagem">
			  <p className="texto">{texto}</p>
      </div>
      <div className="likes">
        <h3 className="qtdLikes">{qtdLikes} likes</h3>
        <button className="button" onClick={contaLike}>curtir</button>
      </div> */}
    </div>
  )
}