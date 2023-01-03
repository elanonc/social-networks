import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { criarUsuario } from "../../../api/usuarios.api";
import { Navegador } from '../../Common/Navegador/Navegador';

import "./PaginaCadastro.css";

export function PaginaCadastro() {

    let { register, handleSubmit } = useForm();
    let navigate = useNavigate();
    
    const tratarSubmit = (data) => {
        criarUsuario(data.nome, data.email, data.senha)
            .then((usuario) => {
                console.log(usuario);
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    
    return (
        <div className="pagina">
            <Navegador/>
            <form className="formulario" onSubmit={handleSubmit(tratarSubmit)}>
                <input {...register("nome")} type="text" placeholder="Nome" />
                <br />
                <input {...register("email")} type="text" placeholder="Email" />
                <br />
                <input type="password" {...register("senha")} placeholder="Senha" />
                <button type="submit">Enviar</button>
            </form>
        </div>
      );
}