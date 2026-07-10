import "./Carta.css";
import { GiCardRandom } from "react-icons/gi";

function Carta({ nombre, tipo, rareza, poder, descripcion, onSeleccionar }) {
  return (
    <article className="carta-destino" onClick={onSeleccionar}>
      <div className="carta-destino-icono">
        <GiCardRandom />
      </div>

      <div className="carta-destino-info">
        <h2>{nombre}</h2>

        <p className="carta-destino-tipo">{tipo}</p>

        <div className="carta-destino-datos">
          <span>Poder: {poder}</span>
        </div>

        <p className="carta-destino-descripcion">{descripcion}</p>
      </div>
    </article>
  );
}

export default Carta;