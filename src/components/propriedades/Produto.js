import React, { useState } from 'react'
import'./Produto.css'

function Produto(props) {

    let btnClasses = 'btn-comprar '
    if (props.verde){
        btnClasses = btnClasses + 'verde'
    }
    if (props.azul){
        btnClasses = btnClasses + 'azul'
    }
    
    return (
      
        <li  className="item">
            <div className="nome">{props.nome}</div>
            <div className="marca">{props.marca}</div>
            <div className="valor">R$ {props.valor}</div>
            <button className={btnClasses}>comprar</button>
            
        </li>
      
    )
}

export default Produto