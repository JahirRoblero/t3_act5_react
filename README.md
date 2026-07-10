# Act5. Introducción a React - Fundamentos y Primer Componente

<div align="center">

# Instituto Tecnológico Nacional de México

### Instituto Tecnológico de Oaxaca

**Carrera:** Ingeniería en Sistemas Computacionales <br><br><br><br>
**Materia:** Programación Web<br><br><br><br>
**Actividad:** 5 Introducción a React - Fundamentos y Primer Componente <br><br><br><br>
**Docente:** Adelina Martínez Nieto<br><br><br><br>
**Alumno:** Gomez Roblero Angel Jahir <br>
**Fecha de entrega:** 10 de julio del 2026<br><br><br><br>

</div>

## Dragon Ball Juego

La aplicación consiste en una mini baraja de cartas de personajes de Dragon Ball, donde el usuario puede seleccionar una carta y modificar su nivel de poder usando botones.

El proyecto fue creado con **Vite + React** y utiliza componentes, props, estado con `useState`, eventos y renderizado dinámico de listas con `.map()`.

## Objetivo del proyecto

El objetivo principal de esta práctica es comprender los fundamentos básicos de React, como:


- Creación de componentes funcionales.
- Uso de props para enviar información entre componentes.
- Uso de estado con `useState`.
- Manejo de eventos con `onClick`.
- Renderizado de listas usando `.map()`.
- Uso de `key` al mostrar elementos dinámicos.
- Despliegue del proyecto en GitHub Pages.


## Descripción de la mini aplicación

La aplicación muestra una lista de cartas de personajes de Dragon Ball como Goku, Vegeta, Gohan, Broly, Freezer, Trunks, Piccolo y Majin Buu.
Cada carta muestra información como:

- Nombre del personaje.
- Tipo de guerrero.
- Rareza.
- Poder.
- Descripción.

Al seleccionar una carta, se muestra su información en un panel principal. Desde ese panel se puede aumentar, disminuir o reiniciar el poder de la carta seleccionada.


## Tecnologías utilizadas

- React
- Vite
- JavaScript
- HTML
- CSS
- React Icons
- Git
- GitHub
- GitHub Pages

## Estructura del proyecto

```txt
t3_act5_react/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Carta.jsx
│   │   ├── Carta.css
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── PanelDestino.jsx
│   │   ├── PanelDestino.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

## Componentes principales

### Header

El componente `Header` muestra el título principal de la aplicación y una pequeña descripción del proyecto.

### Carta

El componente `Carta` recibe información mediante props y muestra los datos de cada carta, como nombre, tipo, rareza, poder y descripción.

### PanelDestino

El componente `PanelDestino` muestra la carta seleccionada y permite modificar su poder usando botones.

### Footer

El componente `Footer` muestra información final del proyecto.


## Funcionamiento de la aplicación

La aplicación tiene un arreglo de cartas dentro de `App.jsx`. Ese arreglo contiene la información de cada personaje.

Después, se usa `.map()` para recorrer el arreglo y mostrar cada carta en pantalla mediante el componente `Carta`.

Cuando el usuario da clic en una carta, se ejecuta una función que cambia la carta seleccionada. También se actualiza el poder actual de esa carta.

Además, el usuario puede usar los botones para:

- Subir poder.
- Bajar poder.
- Reiniciar poder.

Esto permite practicar el uso de estado con `useState`.


## Instalación y ejecución del proyecto

Para instalar las dependencias del proyecto se utiliza:

```bash
npm install
```

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
```

Para desplegar el proyecto en GitHub Pages:

```bash
npm run deploy
```

## Configuración para GitHub Pages

En el archivo `vite.config.js` se agregó la propiedad `base` con el nombre del repositorio:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/t3_act5_react/'
})
```

También se agregaron los scripts de despliegue en `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```


# Cuestionario

## a) ¿Qué diferencia hay entre props y state en React?

Las `props` son datos que un componente recibe desde otro componente. Sirven para mandar información de un componente padre a un componente hijo. Por ejemplo, en mi proyecto el componente `Carta` recibe por props el nombre, tipo, rareza, poder y descripción de cada personaje.

El `state`, en cambio, es información que puede cambiar dentro de un componente. Cuando el estado cambia, React actualiza la pantalla automáticamente. En mi proyecto usé state para guardar la carta seleccionada y el poder actual de esa carta.

## b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

Es importante usar una `key` porque React necesita identificar cada elemento de una lista de forma única. Esto ayuda a que React sepa qué elemento cambió, cuál se agregó o cuál se eliminó.

En mi proyecto, cada carta tiene un `id`, y ese `id` se usa como `key` cuando se renderiza la lista con `.map()`.

Esto hace que React pueda manejar mejor la lista de cartas y actualizar correctamente la interfaz.


## c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.

La función `useState` sirve para guardar información que puede cambiar mientras se usa la aplicación. Cuando esa información cambia, React vuelve a mostrar la parte necesaria de la pantalla con el nuevo valor.

En mi mini aplicación usé `useState` para guardar la carta seleccionada y el poder actual de esa carta.

Ejemplo:

```jsx
const [cartaSeleccionada, setCartaSeleccionada] = useState(cartas[0]);
const [poderActual, setPoderActual] = useState(cartas[0].poder);
```

También usé funciones para cambiar ese estado:

```jsx
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
```
## d) Enlace del repositorio de GitHub

[https://github.com/JahirRoblero/t3_act5_react](https://github.com/JahirRoblero/t3_act5_react)

## e) Enlace del proyecto desplegado en GitHub Pages

[https://JahirRoblero.github.io/t3_act5_react/](https://JahirRoblero.github.io/t3_act5_react/)