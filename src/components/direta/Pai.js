import React, { useState } from 'react'
import Filho from './Filho'
function PaiDireto(props) {

    let x = 15
    let y = 200

    return (
      <>
        <Filho a = { x } b = { y }/>
        <Filho a = { x + 10 } b = { y + 10}/>
      </>
    )
}

export default PaiDireto