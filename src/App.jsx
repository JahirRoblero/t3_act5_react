import { useState } from "react";
import Header from "./components/Header";
import Carta from "./components/Carta";
import PanelDestino from "./components/PanelDestino";
import Footer from "./components/Footer"
import "./App.css";

function App() {
  const cartas = [
    {
      id: 1,
      nombre: "Goku Ultra Instinto",
      tipo: "Guerrero Saiyajin",
      rareza: "Legendaria",
      poder: 12,
      descripcion:
        "Guerrero saiyajin que siempre busca superarse y proteger a sus amigos.",
    },
    {
      id: 2,
      nombre: "Vegeta Ultra Ego",
      tipo: "Príncipe Saiyajin",
      rareza: "Legendaria",
      poder: 11,
      descripcion:
        "Príncipe de los saiyajin, orgulloso y competitivo. Su fuerza aumenta cuando recibe daño.",
    },
    {
      id: 3,
      nombre: "Gohan Beast",
      tipo: "Guerrero híbrido",
      rareza: "Mítica",
      poder: 13,
      descripcion:
        "Hijo de Goku con un poder oculto enorme. Cuando alguien que quiere está en peligro, puede despertar una fuerza impresionante.",
    },
    {
      id: 4,
      nombre: "Broly Super Saiyajin",
      tipo: "Saiyajin legendario",
      rareza: "Mítica",
      poder: 14,
      descripcion:
        "Saiyajin con una fuerza fuera de control. Mientras más avanza la pelea, más aumenta su poder y se vuelve más difícil detenerlo.",
    },
    {
      id: 5,
      nombre: "Freezer Black",
      tipo: "Emperador galáctico",
      rareza: "Épica",
      poder: 12,
      descripcion:
        "Villano frío, inteligente y muy peligroso. Después de entrenar, alcanza una forma con gran velocidad y poder destructivo.",
    },
    {
      id: 6,
      nombre: "Trunks del Futuro",
      tipo: "Guerrero del tiempo",
      rareza: "Rara",
      poder: 9,
      descripcion:
        "Guerrero que viene de un futuro destruido. Pelea con espada y no se rinde porque carga con la esperanza de su mundo.",
    },
    {
      id: 7,
      nombre: "Piccolo Orange",
      tipo: "Namekiano",
      rareza: "Épica",
      poder: 10,
      descripcion:
        "Guerrero namekiano con mucha experiencia en batalla. En su forma Orange gana más fuerza, resistencia y presencia en combate.",
    },
    {
      id: 8,
      nombre: "Majin Buu",
      tipo: "Criatura mágica",
      rareza: "Rara",
      poder: 8,
      descripcion:
        "Personaje mágico, resistente e impredecible. Puede regenerarse, cambiar de forma y seguir peleando aunque reciba mucho daño.",
    },
  ];

  const [cartaSeleccionada, setCartaSeleccionada] = useState(cartas[0]);
  const [poderActual, setPoderActual] = useState(cartas[0].poder);

  function seleccionarCarta(carta) {
    setCartaSeleccionada(carta);
    setPoderActual(carta.poder);
  }

  function subirPoder() {
    setPoderActual(poderActual + 1);
  }

  function bajarPoder() {
    if (poderActual > 0) {
      setPoderActual(poderActual - 1);
    }
  }

  function reiniciarPoder() {
    setPoderActual(cartaSeleccionada.poder);
  }

  return (
    <>
      <Header />

      <PanelDestino
        carta={cartaSeleccionada}
        poderActual={poderActual}
        subirPoder={subirPoder}
        bajarPoder={bajarPoder}
        reiniciarPoder={reiniciarPoder}
      />

      <main className="contenedor-cartas-destino">
        <h2 className="titulo-seccion-destino">Cartas disponibles</h2>

        <section className="lista-cartas-destino">
          {cartas.map((carta) => (
            <Carta
              key={carta.id}
              nombre={carta.nombre}
              tipo={carta.tipo}
              rareza={carta.rareza}
              poder={carta.poder}
              descripcion={carta.descripcion}
              onSeleccionar={() => seleccionarCarta(carta)}
            />
          ))}
        </section>
      </main>

      <Footer/>
    </>
  );
}

export default App;
