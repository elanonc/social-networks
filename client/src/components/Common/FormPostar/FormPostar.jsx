import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./FormPostar.css";
import axios from "axios";

export function FormPostar() {

  let {register, handleSubmit} = useForm();
  let navigate = useNavigate();

  return (
    <div className="container">
      
        <form >
            <div className="form-container">
                <div className="input-container">
                    <label className="label">Mensagem: </label>
                    <input {...register("Mensagem")} type="text" />
                </div>
                <div className="button-container">
                    <button type="submit">Enviar</button>
                </div>
            </div>
        </form>
      
    </div>
  )
}
