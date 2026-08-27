import React from "react";
import "./Cardapio.css";

// export default function () {
//   const produtos = [
//     {
//       id: 1,
//       categoria: "Pizzas Tradicionais",
//       nome: "Calabresa",
//       descricao: "Molho de tomate, mussarela, calabresa e cebola.",
//       preco: 39.9,
//       emoji: "🍕",
//     },
//     {
//       id: 2,
//       categoria: "Pizzas Tradicionais",
//       nome: "Mussarela",
//       descricao: "Molho de tomate, mussarela, tomate e orégano.",
//       preco: 37.9,
//       emoji: "🍕",
//     },
//     {
//       id: 3,
//       categoria: "Pizzas Tradicionais",
//       nome: "Frango com Catupiry",
//       descricao: "Frango desfiado, mussarela e catupiry.",
//       preco: 44.9,
//       emoji: "🍕",
//     },
//     {
//       id: 4,
//       categoria: "Pizzas Especiais",
//       nome: "Open Especial",
//       descricao: "Mussarela, calabresa, bacon, milho, cebola e catupiry.",
//       preco: 49.9,
//       emoji: "🔥",
//     },
//     {
//       id: 5,
//       categoria: "Pizzas Especiais",
//       nome: "4 Queijos",
//       descricao: "Mussarela, provolone, parmesão e catupiry.",
//       preco: 47.9,
//       emoji: "🧀",
//     },
//     {
//       id: 6,
//       categoria: "Pizzas Especiais",
//       nome: "Portuguesa",
//       descricao: "Mussarela, presunto, ovo, cebola, milho e ervilha.",
//       preco: 46.9,
//       emoji: "🍕",
//     },
//     {
//       id: 7,
//       categoria: "Bebidas",
//       nome: "Coca-Cola 2L",
//       descricao: "Refrigerante Coca-Cola original.",
//       preco: 12.0,
//       emoji: "🥤",
//     },
//     {
//       id: 8,
//       categoria: "Bebidas",
//       nome: "Guaraná 2L",
//       descricao: "Refrigerante Guaraná Antarctica.",
//       preco: 10.0,
//       emoji: "🥤",
//     },
//     {
//       id: 9,
//       categoria: "Sobremesas",
//       nome: "Pizza de Chocolate",
//       descricao: "Chocolate ao leite e granulado.",
//       preco: 39.9,
//       emoji: "🍫",
//     },
//     {
//       id: 10,
//       categoria: "Sobremesas",
//       nome: "Pizza de Banana",
//       descricao: "Banana, açúcar, canela e leite condensado.",
//       preco: 36.9,
//       emoji: "🍌",
//     },
//   ];

//   function Cardapio() {
//     const [categoria, setCategoria] = useState("Todos");
//     const [carrinho, setCarrinho] = useState([]);

//     const categorias = [
//       "Todos",
//       "Pizzas Tradicionais",
//       "Pizzas Especiais",
//       "Bebidas",
//       "Sobremesas",
//     ];

//     const produtosFiltrados =
//       categoria === "Todos"
//         ? produtos
//         : produtos.filter((produto) => produto.categoria === categoria);

//     function adicionarAoCarrinho(produto) {
//       setCarrinho([...carrinho, produto]);
//     }

//     const total = carrinho.reduce((soma, produto) => soma + produto.preco, 0);

//     return (
//       <div className="cardapio">
//         {/* HEADER */}
//         <header className="header">
//           <div>
//             <h1>🍕 Open Pizzaria</h1>
//             <p>A melhor pizza da cidade!</p>
//           </div>

//           <button className="cartButton">
//             🛒 Carrinho ({carrinho.length})
//           </button>
//         </header>

//         {/* BANNER */}
//         <main>
//           <section className="hero">
//             <div className="heroContent">
//               <span>🔥 OFERTA ESPECIAL</span>

//               <h2>
//                 Pizza quentinha
//                 <br />
//                 na sua porta!
//               </h2>

//               <p>Escolha sua pizza favorita e peça agora.</p>

//               <button
//                 onClick={() => setCategoria("Pizzas Tradicionais")}
//                 className="heroButton"
//               >
//                 Ver pizzas 🍕
//               </button>
//             </div>
//           </section>

//           {/* CATEGORIAS */}
//           <div className="categories">
//             {categorias.map((item) => (
//               <button
//                 key={item}
//                 className={categoria === item ? "active" : ""}
//                 onClick={() => setCategoria(item)}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>

//           {/* CARDÁPIO */}
//           <section className="menu">
//             <h2>{categoria === "Todos" ? "Nosso Cardápio" : categoria}</h2>

//             <div className="products">
//               {produtosFiltrados.map((produto) => (
//                 <article className="card" key={produto.id}>
//                   <div className="productImage">{produto.emoji}</div>

//                   <div className="cardContent">
//                     <h3>{produto.nome}</h3>

//                     <p>{produto.descricao}</p>

//                     <div className="cardFooter">
//                       <strong>
//                         R$ {produto.preco.toFixed(2).replace(".", ",")}
//                       </strong>

//                       <button onClick={() => adicionarAoCarrinho(produto)}>
//                         + Adicionar
//                       </button>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </section>

//           {/* CARRINHO */}
//           {carrinho.length > 0 && (
//             <aside className="cart">
//               <div className="cartHeader">
//                 <strong>🛒 Seu pedido</strong>

//                 <span>{carrinho.length} item(s)</span>
//               </div>

//               <div className="cartTotal">
//                 Total: R$ {total.toFixed(2).replace(".", ",")}
//               </div>

//               <button className="finishButton">Finalizar pedido</button>
//             </aside>
//           )}
//         </main>
//       </div>
//     );
//   }
// }

export default function Cardapio() {
  return (
    <div>
      <header>
        <h1>🍕 Open Pizzaria</h1>
        <p>As melhores pizzas da cidade!</p>
      </header>

      <main className="cardapio">
        <div className="pizza">
          <h2>🍕 Calabresa</h2>
          <p>Molho de tomate, mussarela, calabresa e cebola.</p>
          <span className="preco">R$ 39,90</span>
        </div>

        <div className="pizza">
          <h2>🍕 Mussarela</h2>
          <p>Molho de tomate, mussarela, tomate e orégano.</p>
          <span className="preco">R$ 37,90</span>
        </div>

        <div className="pizza">
          <h2>🍕 Frango com Catupiry</h2>
          <p>Molho de tomate, frango desfiado e catupiry.</p>
          <span className="preco">R$ 44,90</span>
        </div>

        <div className="pizza">
          <h2>🍕 Portuguesa</h2>
          <p>Presunto, ovos, cebola, ervilha, mussarela e azeitona.</p>
          <span className="preco">R$ 46,90</span>
        </div>

        <div className="pizza">
          <h2>🍕 Chocolate</h2>
          <p>Chocolate ao leite e chocolate branco.</p>
          <span className="preco">R$ 42,90</span>
        </div>
      </main>
    </div>
  );
}
