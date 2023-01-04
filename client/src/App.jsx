import { useState, createContext } from 'react';
import './App.css';
// import { PaginaFeed } from './components/Pages/PaginaFeed/PaginaFeed';

import { PaginaFeed } from "./components/Pages/PaginaFeed/PaginaFeed";
import { PaginaPostar } from "./components/Pages/PaginaPostar/PaginaPostar";
import { PaginaCadastro } from "./components/Pages/PaginaCadastro/PaginaCadastro";
import { PaginaLogin } from './components/Pages/PaginaLogin/PaginaLogin';
import { PaginaInicial } from './components/Pages/PaginaInicial/PaginaInicial';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const authContext = createContext(null);

function App() {
  
  const [token, setToken] = useState(localStorage.getItem("token"));

  const setTokenLocal = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  return (
    <div className="App">
      <authContext.Provider value={{ token: token, setToken: setTokenLocal }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={token == null ? <PaginaFeed /> : <PaginaInicial />} ></Route>
            {/* <Route path="/feed" element={<PaginaFeed/>}></Route> */}
            <Route path="/cadastro" element={<PaginaCadastro/>}></Route>
            <Route path="/postar" element={<PaginaPostar/>}></Route>
            <Route path="/login" element={<PaginaLogin />}></Route>
          </Routes>
        </BrowserRouter>
      </authContext.Provider>
    </div>
  )
}

export default App;