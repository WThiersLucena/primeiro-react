import React from 'react'
import If from './if'

function UsuarioLogado(props) {

    const usuario = props.usuario  || {}

    return (
      <>
        <If teste={usuario && usuario.nome && usuario.email}>
            <h2>Usuario Logado :</h2>
            <h3>
                {usuario.nome} - {usuario.email}
            </h3>
        </If>

        <If teste={!usuario || !usuario.nome || !usuario.email}>
            <h2>Ola, Faça seu, <a href="#">Login  :</a>
            </h2>
           
        </If>

        
      </>
    )
}

export default UsuarioLogado