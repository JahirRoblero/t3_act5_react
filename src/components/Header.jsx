import "./Header.css";
import { BsSuitSpadeFill } from "react-icons/bs";

function Header() {
  return (
    <header className="header">
      <div className="header-contenido">
        <BsSuitSpadeFill className="carta" />

        <h1>Dragon ball juego</h1>
        <BsSuitSpadeFill className="carta2"/>
        <p className="descripcion">
          Elige tu carta, agregale o quitale poder.
        </p>
      </div>
    </header>
  );
}

export default Header;
