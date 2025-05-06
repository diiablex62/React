import React from "react";

//on recupere les donnees de chaque article
export default function OneArticle({ article }) {
  return (
    <div className="product-card">
      <img src={article.image} alt={article.name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{article.name}</h2>
        <p className="product-price"> {article.price}</p>
      </div>
    </div>
  );
}