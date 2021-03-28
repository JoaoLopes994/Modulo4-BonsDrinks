import React from 'react'
import {useState} from 'react'
import "./estilo.css"


export default function Button({estilo, noClick, titulo}) {
    return (
        <div>
            <button className="estiloButton" onClick={() => {
                noClick()
            }}>
                {titulo}
            </button>
        </div>
    )
}
