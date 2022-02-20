import React from 'react';
import Primeiro from './components/Primeiro';
import CompPadrao, {Component1, Component2} from './components/Multi.js';
import Estilos from './components/Estilos';
import MinMax from './components/MinMax';
import Titulo from './components/Titulo';
import Botao from './components/Botao';


function App() {

  return (
   <div>
    <Primeiro />
    <CompPadrao />
    <Component1 />
    <Component2 />
    <Estilos />
    <MinMax min="10" max="20" />
    <MinMax min={5} max={10} />
    <Titulo principal="1º [ Olá ]" secundaria="2º [ Olá ]" />
    <Botao />
  </div>
);
}

export default App;
