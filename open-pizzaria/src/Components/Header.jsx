import "./Header.css";

const Header = () => {
  return (
    <>
      <header class="header-pizzaria">
        <div class="header-conteudo">
          <span class="header-emoji">🍕</span>

          <h1>Bem-vindo à Open Pizzaria!</h1>

          <p>
            Seja muito bem-vindo! Aqui você encontra pizzas deliciosas, feitas
            com carinho e os melhores ingredientes. Escolha seu sabor favorito e
            aproveite!
          </p>

          <button>🍕 Ver nossas pizzas</button>
        </div>
      </header>

      <hr />
    </>
  );
};

export default Header;
