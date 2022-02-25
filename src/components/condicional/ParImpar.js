import React, { useState } from 'react'

{/*
*/}
function ParImpar({num = 0}) {
      {/*Outra Opção  de chamar a função COM PROPS */}
    {/*function ParImpar({props}){
        let numero = 0
        numero = props.num ? props.mum %0
    
    */}

    return (
      <div>
        <he> O Resultado e: </he>
        {num % 2 == 0
         ? <h3> par </h3>
         : <h3>impar</h3>}
      </div>
    )
}

export default ParImpar