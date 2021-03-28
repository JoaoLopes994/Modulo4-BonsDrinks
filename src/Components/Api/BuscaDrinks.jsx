import React from 'react'
import Button from "../Button/Button"
import "./estilo.css"
import {requisicao} from "../../Model/arquivoFetch"
import {useState, useEffect} from "react"

export default function BuscaDrinks() {

    const [dadosApi, setDadosApi] = useState("")
 
    useEffect(async () => {
        const req = await requisicao();
        setDadosApi(req);
        console.log(dadosApi)

    }, [] )

    const arrayMap = [1,2,3,4,5,6,7]

    return (
        <div className="gridApi">
            <section className="cabecalho">
                <div>
                    <h1 className="drink1"> Drinks</h1>
                </div>
                <div className="posicaoBotao">
                    <Button estilo ="Button" titulo= "Drinks" />
                    <Button estilo ="Button" titulo= "Buscar Drinks" />
                </div>
            </section>
            <section className="conteudoDrink">
                {arrayMap.map((valor, index)=> {
                    <div>
                        <h1>{dadosApi}</h1>
                    </div>
                })} 

            </section>
        </div>
    )
}
