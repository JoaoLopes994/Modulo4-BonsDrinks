import React from 'react'
import "./estilo.css"

export default function Header() {
    return (
        <div>
            <header className="estiloHeader" >
                <ul className="menuNav">
                    
                    <li className="itemLista">Drinks</li>                    
                    <li className="itemLista">Sobre</li>
                    <li className="itemLista">Bons Drinks</li>
                    <li className="itemLista">Nosso Time</li>
                    <li className="itemLista">Contatos</li>
                    
                </ul>
            </header>
        </div>
    )
}


