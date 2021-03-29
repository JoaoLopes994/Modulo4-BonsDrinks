import React from 'react'
import "./estilo.css"
import perfil from "../../assets/time.jpg"


export default function NossoTime() {
    return (
      <div className="conteudoTime">
        <h1 className="tituloNossoTime">Nosso Time</h1>
        <img src={perfil} className="imagemTime"></img>
        <p className="textoTime">
          João Pedro, 26 anos, iniciou sua trajetória como atleta profissional
          de futebol, sendo exposto desde cedo ao ambiente colaborativo de
          equipe. Também trabalhou com hotelaria, serviços e como assistente de
          produção no setor de entretenimento.Durante seis meses, participou da Resilia,
          desenvolveu habilidades em Front-End, Back-End, e de hábitos e
          comportamentos, as soft skills. Se destacou na modelagem e análise de
          dados utilizando MySQL, Docker e Metabase para desenvolver um
          dashboard de consultas específicas sobre a temporada 2018/2019 da NBA.
          Também participou no desenvolvimento de uma solução para recargas de
          Telecom junto à empresa M4U, utilizando HTML, CSS, e a biblioteca
          Materialize(CSS) para o FrontEnd. Banco de dados MysQL e backEnd
          estruturado com Node.js, seguindo a arquitetura REST e aplicando
          metodologia ágil. Atualmente está aprofundando os conhecimentos em
          análises de projeto, metodologia ágil, banco de dados relacionais e
          não relacionais(MongoDB), Java Script, React e Node.js.
        </p>
      </div>
    );
}
