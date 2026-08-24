import "./Menu.css";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">Sobre</a>
        </li>

        <li className="submenu">
          <a href="#">Cardápio ▾</a>
          <ul>
            <li>
              <a href="#">Calabresa</a>
            </li>

            <li>
              <a href="#">Mussarela</a>
            </li>

            <li>
              <a href="#">Frango com catupiry</a>
            </li>
            <li>
              <a href="#">Toscana</a>
            </li>
          </ul>
        </li>

        <li className="submenu">
          <a href="#">Fale Conosco ▾</a>

          <ul>
            <li>
              <a href="#">WhatsApp</a>
            </li>

            <li>
              <a href="#">Instagram</a>
            </li>

            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
