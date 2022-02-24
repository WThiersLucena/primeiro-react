import React, { useState } from 'react'
import Filho from './filho'
function Pai(props) {

    let x = 15
    let y = 200

    return (
      <>
        <Filho a={x} b={y}/>
        <Filho a={x + 20 } b={ y + 40}/>
      </>
    )
}

export default Pai