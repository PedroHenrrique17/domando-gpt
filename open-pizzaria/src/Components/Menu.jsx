import "./Menu.css";

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">Sobre</a>
        </li>

        <li>
          <a href="#">Cardápio</a>
        </li>

        <li>
          <a href="#">Fale Conosco</a>
        </li>

        <li className="dropdown">
          <a href="#">Mais ▾</a>

          <ul className="dropdown-menu">
            <li>
              <a href="#">Fale Conosco</a>
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
