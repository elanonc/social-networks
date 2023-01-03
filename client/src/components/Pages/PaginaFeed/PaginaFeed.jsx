import React from 'react';
import { Navegador } from '../../Common/Navegador/Navegador';
import "./PaginaFeed.css";
import { LinhaDoTempo } from '../../Common/LinhaDoTempo/LinhaDoTempo';

export function PaginaFeed() {
  return (
    <div className="pagina">
        <Navegador/>
        <LinhaDoTempo/>
    </div>
  )
}