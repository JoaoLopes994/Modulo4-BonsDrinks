import React from 'react'

export default function Contato() {
    return (
        <div>
            <h1 className="textoContato">Contato</h1>
                <div className="formulario">
                    <form>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome"/>
                        <label htmlFor="email">E-mail:</label>
                        <input type="text" id="email"/>
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea id="mensagem" rows="10"></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
    )
}
