import React from 'react'

function Familia(props) {


    return (
      <>
        <h2> [Inicio] Membros da familia </h2>
             {props.children} {/* ( Children ) palavra reservada do React que 
             lhe permite chamar outras funçoes dentro */}
        <h2> [Fim] Membros da familia </h2>
      </>
    )
}

export default Familia