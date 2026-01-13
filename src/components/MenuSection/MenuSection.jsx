import "./MenuSection.css";
import React from "react";

const MenuSection = () => (
  <section id="menu" className="section">
    <h2>Menú</h2>
    <ul className="menu-list">
      <li>
        <strong>Ensalada Fresca</strong> - Mezcla de hojas verdes, tomate cherry y vinagreta de la casa.
      </li>
      <li>
        <strong>Pasta Artesanal</strong> - Pasta hecha a mano con salsa de temporada.
      </li>
      <li>
        <strong>Postre Minimal</strong> - Selección de frutas frescas y mousse ligero.
      </li>
    </ul>
  </section>
);

export default MenuSection;
