import { Link } from "react-router-dom";
import "./Menu.css";
 

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/users">Usuarios</Link>
        </li>
        <li>
          <Link to="/comments">Comentario</Link>
        </li>
        <li className="submenu">
         <Link to="/cardapio">Cardapio</Link>
        </li>
        <li className="submenu">
          <a href="#">Mais ▾</a>

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
