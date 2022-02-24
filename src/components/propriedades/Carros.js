import React, { useState } from 'react'
import'./Carros.css'

function Carros(props) {

    let btnClasses = 'btn-comprar '

    return (
      
         <li  className="item">
            <div className="modelo">Modelo :{props.modelo}</div>
            <div className="marca"> Marca :{props.marca}</div>
            <div className="cor"> Cor : {props.cor}</div>
            <div className="ano">Ano : {props.ano}</div>
            <div className="portas">Portas : {props.portas}</div>
            <div className="combustivel">Combustivel: {props.combustivel}</div>
            <div className="cambio"> Cambio: {props.cambio}</div>
            <div className="aro"> Aro :{props.aro}</div>
            <div className="potencia">Potencia: {props.potencia}</div>
            <div className="preco">Preco: {props.preco}</div>
            <button  className={btnClasses}>comprar</button>
            
        </li>
      
    )
}

export default Carros