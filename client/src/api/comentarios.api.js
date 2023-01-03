import axios from "axios";

const url_base = "http://localhost:3000";

export const criarComentario = (texto, id_post, id_usuario) => {
  return axios({
    method: "POST",
    url: url_base + "/comentarios",
    data: {
      texto,
      id_post,
      id_usuario,
    },
  });
};