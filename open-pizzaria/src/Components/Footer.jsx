import "./Footer.css";

const Footer = (props) => {
    
  return (
    // <footer>
    //     <h2>{props.titleFooter}</h2>
    // </footer>
     <footer class="footer">
       <div class="footer-container">
         <div class="footer-brand">
           <h2>🍕 OPEN PIZZARIA</h2>
           <p>Sabor que abre o apetite!</p>
         </div>

         <div class="footer-links">
           <h3>Navegação</h3>
           <a href="#">Início</a>
           <a href="#">Cardápio</a>
           <a href="#">Sobre Nós</a>
           <a href="#">Contato</a>
         </div>

         <div class="footer-contact">
           <h3>Contato</h3>
           <p>📍 Rua da sua pizzaria, 123</p>
           <p>📞 (11) 99999-9999</p>
           <p>📧 contato@openpizzaria.com.br</p>
         </div>

         <div class="footer-social">
           <h3>Siga a gente</h3>
           <a href="#">Instagram</a>
           <a href="#">Facebook</a>
           <a href="#">WhatsApp</a>
         </div>
       </div>

       <div class="footer-bottom">
         <p>© 2026 Open Pizzaria. Todos os direitos reservados.</p>
         <p>Feito com ❤️ e muita pizza 🍕</p>
       </div>
     </footer>
  );
 };



export default Footer;
