import axios from "axios";

const url_base = "http://localhost:3000";

export const criarPost = (texto, likes, token) => {
  return axios({
    method: "POST",
    url: url_base + "/post",
    data: {
      texto,
      likes,
    },
    headers: {
      token,
    },
  });
};

export const fetchPosts = (token) => {
  return axios({
    method: "GET",
    url: url_base + "/post",
    headers: {
      token,
    },
  });
};
