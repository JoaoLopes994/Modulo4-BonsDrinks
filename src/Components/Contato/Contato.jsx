import React from 'react'
import "./estilo.css"
import Button from "../Button/Button"

export default function Contato() {
    return (
        <div className=" conteudo ">
            <h1 className="textoContato">Contato</h1>
            <img className="imagemForm"></img>
                <div className="formulario">
                    <form>
                        <label className="labelForms" htmlFor="nome">Nome:</label>
                        <input className="inputForms" type="text" id="nome"/>
                        <label className="labelForms" htmlFor="email">E-mail:</label>
                        <input className="inputForms" type="text" id="email"/>
                        <label className="labelForms" htmlFor="mensagem">Mensagem:</label>
                        <textarea className="inputForms" id="mensagem" rows="10"></textarea>
                        <Button titulo="Enviar"/>
                    </form>
                </div>
            </div>
    )
}
