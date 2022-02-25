import React, { useState } from 'react'

function Filho(props) {


    return (
      <>
        <h2>linha A Valores simples =  {props.a}</h2>
        <h2>linha B com soma + 10 [ {props.b} ] </h2>
      </>
    )
}

export default Filho