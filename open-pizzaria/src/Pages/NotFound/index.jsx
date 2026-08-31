import React from 'react'

import "./NotFound.css";

export default function index() {
  return (
    <main className="not-found">
      <div className="pizza-bg pizza-bg-1">🍕</div>
      <div className="pizza-bg pizza-bg-2">🍕</div>

      <section className="not-found-card">
        <div className="pizza-icon">🍕</div>

        <span className="error-code">404</span>

        <h1>Ops! Essa página sumiu do forno.</h1>

        <p>
          Parece que essa página foi entregue no endereço errado.
          Que tal voltar para a Open Pizzaria e pedir uma pizza?
        </p>

        <a href="/" className="home-button">
          🍕 Voltar para o início
        </a>
      </section>
    </main>
  );
}