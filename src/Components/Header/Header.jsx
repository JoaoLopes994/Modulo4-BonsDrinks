import React from 'react'
import { Link } from 'react-router-dom'
import "./estilo.css"


export default function Header() {
    return (
        <div>
            <header className="estiloHeader" >
                <ul className="menuNav">
                    
                    <li><Link to ="/Drinks" className="itemLista">Drinks</Link></li>                    
                    <li><Link to ="/Sobre" className="itemLista">Sobre</Link></li>
                    <li><Link to ="/" className="itemLista" id="itemBonsDrinks">Bons Drinks</Link></li>
                    <li><Link to ="/NossoTime" className="itemLista">Nosso Time</Link></li>
                    <li><Link to ="/Contato" className="itemLista">Contato</Link></li>
                    
                </ul>
            </header>
        </div>
    )
}


