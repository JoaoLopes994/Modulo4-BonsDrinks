import { React, useEffect, useState } from "react";
import Card from "../Card/Card";
import "./estilo.css";
import { requisicao } from "../../Service/Url";
import ConteudoDrinks from "../ConteudoDrinks/ConteudoDrinks";

export default function ListaDrinks(props) {
  let [dadosApi, setDadosApi] = useState("Enviar");
  let [dadosApiConteudo, setDadosApiConteudo] = useState(0);

  let render = [
    <ConteudoDrinks
      className="conteudoDrinks"
      nomeDrink={dadosApi[0].strDrink}
      categoriaDrink={dadosApi[0].strCategory}
      copoDrink={dadosApi[0].strGlass}
      ibaDrink={dadosApi[0].strIBA}
      ingredienteDrink={dadosApi[0].strIngredient1}
      instrucoesDrink={dadosApi[0].strInstructions}
    />,
  ];

  function dadosCategoria(number) {
    console.log()
    return render[number];
  }

  function card1() {
    setDadosApi(dadosApi)
    setDadosApiConteudo(0)
  }
  function card2() {
    setDadosApi(dadosApi)
    setDadosApiConteudo(1)
  }

  useEffect(async () => {
    const req = await requisicao();
    setDadosApi(req);
  }, []);

  let arrayQuant = [card1, card2, "card3", "card4", "card5", "card6"];



  return (
    <div className="divListaDrinks">
      <div className="listaDrinks"></div>
      <ul className="ulDrinks">
        <section className="cabecalho">
          <h1 className="tituloDrink">Drinks</h1>
          <div className="divBotoes">
            <button className="botoes">Drinks Populares</button>
            <button className="botoes">Buscar Drinks</button>
          </div>
        </section>
        <section className="secaoBebidas">
          {arrayQuant.map((valor, index) => {
            return (
              <li>
                <Card noClick={valor} url={dadosApi[index].strDrinkThumb}>
                </Card>
              </li>
            );
          })}
        </section>
        <section className="conteudoDrinks">
          {dadosCategoria(dadosApiConteudo)}
        </section>
        <section className="imgListaDrinks">
          <img className="imgListaItens" src={dadosApi[0].strDrinkThumb} />
        </section>
      </ul>
    </div>
  );
}
