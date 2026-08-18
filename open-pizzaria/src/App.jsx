function App() {
  return (
    <>
      <header>
        <h1>🍕 Bem-vindo à Open Pizzaria!</h1>
        <p>
          Seja muito bem-vindo! Aqui você encontra pizzas deliciosas, feitas com
          carinho e os melhores ingredientes. Escolha seu sabor favorito e
          aproveite!
        </p>
      </header>
      <hr />
      <section className="banner">
        <img
          src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&h=300"
          alt="Pizza deliciosa da Open Pizzaria"
        />
      </section>
      <section className="sobre-pizzaria">
        <article>
          <h1>Nossas Pizzas</h1>
          <p>
            Na Open Pizzaria, preparamos pizzas deliciosas com ingredientes
            frescos e selecionados. São diversos sabores para você escolher e
            aproveitar cada pedaço!
          </p>
        </article>

        <article>
          <h1>Qualidade e Sabor</h1>
          <p>
            Nosso objetivo é levar até você uma pizza saborosa, feita com
            carinho e muita qualidade. Escolha seu sabor favorito e venha
            experimentar a experiência da Open Pizzaria!
          </p>
        </article>
      </section>
    </>
  );
}

export default App;
