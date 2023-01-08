import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./FormPostar.css";
import axios from "axios";

import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 

export function FormPostar() {

  let {register, handleSubmit} = useForm();
  let navigate = useNavigate();

  const { quill, quillRef } = useQuill();
  const [value,setValue] = useState();

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        console.log(quillRef.current.firstChild.innerHTML);
        setValue(quillRef.current.firstChild.innerHTML)
      });
    }
  }, [quill]);

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
    <div className="container">
      
        {/* <form >
            <div className="form-container">
                <div className="input-container">
                    <label className="label">Mensagem: </label>
                    <input {...register("Mensagem")} type="text" />
                </div>
                <div className="button-container">
                    <button type="submit">Enviar</button>
                </div>
            </div>
        </form>  */}


        <div className='text-editor'>
            <div ref={quillRef} />
        </div>


            {/* {/* <button type="submit" onSubmit={handleSubmit(tratarSubmit)}>Submit</button>  */}

    </div>
  )
}
