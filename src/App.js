import React, { Component } from 'react'
import './App.css';
import Primeiro from './components/Primeiro';
import Segundo from './components/Segundo';
import Teste ,{Component1,Component2} from './components/Multi';



function App() {
  return (
    <div>
      <h2> Teste dentro de App.js</h2>
      <Primeiro></Primeiro>
      <Segundo></Segundo> 
      <Teste></Teste>
      <Component1></Component1>
      <Component2></Component2>
      </div>   
    )
  
  }

export default App;
