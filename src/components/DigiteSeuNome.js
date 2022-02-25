import React, { useState } from 'react'

function DigiteSeuNome(props) {

    const[nome,setNome] = useState ('')
    const[email,setEmail] = useState ('')
    console.log(nome )
    console.log(email)
    
    return (
      <>
        <h2>{nome}</h2>
        <h2>{email}</h2>
        <input type="Texto" placeholder="Diguite aqui" value={nome} onChange={event =>setNome(event.target.value)}></input>
        <input type="email" placeholder="Diguite Email" value={email} onChange={event =>setEmail(event.target.value)}></input>
    
      </>
    )
}

export default DigiteSeuNome