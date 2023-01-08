import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { criarPost } from "../../../api/posts.api";
import { authContext } from "../../../App";
import { FormPostar } from "../../Common/FormPostar/FormPostar";

import { Navegador } from '../../Common/Navegador/Navegador';
// import { FormPostar } from '../../Common/FormPostar/FormPostar';
import "./PaginaPostar.css";

export function PaginaPostar() {
    let { register, handleSubmit } = useForm();
    let navigate = useNavigate();
    let auth = useContext(authContext);

    const tratarSubmit = (data) => {
      criarPost(data.texto, 0, auth.token)
        .then((post) => {
          console.log(post);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <div className="post-container">
          <Navegador/>
          <form className="formulario" onSubmit={handleSubmit(tratarSubmit)}>
            <div className="text">
              <label>O que está pensando?: </label>
  
              <textarea {...register("texto")}/>
            </div>
            <div className="container-submit">
              <button type="submit">Enviar</button>
            </div>
          </form>
          {/* <FormPostar/> */}
      </div>
    )
}