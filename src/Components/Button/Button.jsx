import React from 'react'
import {useState} from 'react'


export default function Button({estilo, noClick, titulo}) {
    return (
        <div>
            <button className={estilo} onClick={() => {
                noClick()
            }}>
                {titulo}
            </button>
        </div>
    )
}
