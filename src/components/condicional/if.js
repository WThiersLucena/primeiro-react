import React from 'react'

function If(props) {

    if(props.teste){
        return props.children
    }else {
        return false
    }

    
}

export default If