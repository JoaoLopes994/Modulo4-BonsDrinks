import React from "react";
import "./Style.css";

export default function Card({ url, noClick, titulo }) {
  return (
    <div className="divPaicard">
      <div className="cardDrinks">
        <img onClick={() => {
          return noClick
        }} className="imagemCard" src={url} />
        <h3>{titulo}</h3>
      </div>
    </div>
  );
}
