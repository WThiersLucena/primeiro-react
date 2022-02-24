import React from 'react';
import Primeiro from './components/Primeiro';
import CompPadrao, {Component1, Component2} from './components/Multi.js';
import Estilos from './components/Estilos';
import MinMax from './components/MinMax';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador'
import Propriedades from './components/propriedades/propriedades'
import Pessoa from './components/propriedades/Pessoa'
import Produto from './components/propriedades/Produto'
import Carros from './components/propriedades/Carros'
import Pai from './components/indireta/Pai';
import PaiDireto from './components/direta/Pai';



function App() {

  return (
   <div>
   {/*<Primeiro />
    <CompPadrao />
    <Component1 />
    <Component2 />
    <Estilos />
    <Titulo/>
    <MinMax min="10" max="20" />
    <MinMax min={5} max={10} />
    <Titulo principal="1º [ Olá ]" secundaria="2º [ Olá ]" />
   <Botao />
   
   <Propriedades nome="Jonas" nota={9.9}/>
   <Propriedades nome="Wanderson" nota={7}/>
   <Propriedades nome="Alex"/>
   
    <Pessoa nome="Wanderson" idade="30" sexo="M" estado_civil="casado"/>
    <Pessoa nome="Jonas" idade="28" sexo="M" estado_civil="casado"/>
    <Pessoa nome="Fulano" idade="99" sexo="M" estado_civil="Viuvo"/>

    <Contador inicial={100} passo={10} limiteMax ={150}/>
    <Contador inicial={100} passo={10} limiteMax ={170}/>
    
    <ul>
      <Produto nome="Teclado multimídia" marca="Dell" valor="199.90" azul/>
      <Produto nome="Mouse óptico" marca="Dell" valor="9.90" verde/>
      <Produto nome="Monitor" marca="LG" valor="499.90"/>
    </ul>
    
    
    <ul>
       <Carros   modelo=" Escort - XR3 " marca=" Ford" cor=" Amarelo" ano=" 1989" portas="  2"
        combustivel=" Alcool" cambio=" Ruim" aro=" Torto" potencia=" Na ribanceira vai bem" preco=" 1 bilhete CPTM"
      />
    
      <Carros  modelo="  Santana " marca=" Volkswagen" cor=" Preto" ano=" 1999" portas=" 4"
         combustivel=" Alcool" cambio=" Manual" aro=" 20" potencia=" 2.0" preco=" 5.000,00" 
      />
    
    
    
      <Carros  modelo=" Landau " marca=" Ford" cor=" Preto" ano=" Indefinido" portas=" 4"
         combustivel=" Precisa de muito" cambio=" Automatico" aro=" 20" potencia=" 2.8" preco=" Negociavel" 
      />
    

    
      <Carros  modelo=" Modelo : Rural Willys " marca=" Marca : Ford" cor=" cor : Branca" ano="Ano : 1972" portas=" Portas : 4"
         combustivel=" Diesel" cambio=" Sequencial" aro=" 23" potencia=" Bruta" preco="R$ 16.367,84" 
      />
    
    
    </ul>
    */}
    <PaiDireto/>
    <Pai/>
  </div>
);
}
export default App;
