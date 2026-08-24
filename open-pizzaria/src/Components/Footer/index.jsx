import "./Footer.css";

const Footer = (props) => {
  console.log(props);
  return (
    // <footer className="footer">
    //   <h1>{props.tittleFooter}</h1>
    // </footer>

        <footer className="footer">
          <div className="footer-glow"></div>

          <div className="footer-container">

            <div className="footer-brand">
              <div className="logo">
                <span>🍕</span>
                <h2>Open <strong>Pizzaria</strong></h2>
              </div>

              <p>
                A melhor experiência em pizza, feita com ingredientes selecionados
                e muito sabor.
              </p>

              <div className="social-icons">
                <a href="#" aria-label="Instagram">📸</a>
                <a href="#" aria-label="Facebook">f</a>
                <a href="#" aria-label="WhatsApp">💬</a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Explorar</h3>

              <a href="#">Início</a>
              <a href="#">Cardápio</a>
              <a href="#">Promoções</a>
              <a href="#">Sobre nós</a>
            </div>

            <div className="footer-column">
              <h3>Atendimento</h3>

              <p>📍 Rua das Pizzas, 123</p>
              <p>📞 (11) 99999-9999</p>
              <p>🕐 Ter — Dom: 18h às 23h30</p>
            </div>

            <div className="footer-column">
              <h3>Peça agora</h3>

              <p className="order-text">
                Está com fome? Faça seu pedido e receba sua pizza quentinha.
              </p>

              <a href="#" className="order-button">
                Pedir agora →
              </a>
            </div>

          </div>

          <div className="footer-bottom">
            <span>© 2026 Open Pizzaria</span>
            <span>Feito com ❤️ e muita pizza 🍕</span>
          </div>
        </footer>
  );
};

export default Footer;
