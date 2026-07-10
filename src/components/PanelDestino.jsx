import "./PanelDestino.css";

function PanelDestino({ carta, poderActual, subirPoder, bajarPoder, reiniciarPoder }) {
  if (!carta) {
    return (
      <section className="panel-destino">
        <h2>Carta seleccionada</h2>
        <p>Selecciona una carta para ver su información.</p>
      </section>
    );
  }

  return (
    <section className="panel-destino">
      <div className="panel-destino-contenido">
        <div>
          <p className="panel-etiqueta">Carta seleccionada</p>
          <h2>{carta.nombre}</h2>
          <p className="panel-tipo">{carta.tipo}</p>
          <p className="panel-descripcion">{carta.descripcion}</p>
        </div>

        <div className="panel-poder">
          <p>Poder actual</p>
          <span>{poderActual}</span>

          <div className="panel-botones">
            <button onClick={subirPoder}>Subir poder</button>
            <button onClick={bajarPoder}>Bajar poder</button>
            <button onClick={reiniciarPoder}>Reiniciar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PanelDestino;