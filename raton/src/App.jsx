import { useEffect, useState } from 'react'
import './App.css'

const SeguimientoRaton = () => {
  /* activado */
  const [seguir, setseguimiento] = useState(false)
  /* posición */
  const [posicion, setPosicion] = useState({ x: 250 , y: 250})

  useEffect(() => {
    /* console.log('efecto', { seguir }) */
    const manejarMovimiento = (event) => {
      /* Client  x y CLient Y tienen que llamarse así para coger las variables del objeto event de javascript */
      const { clientX, clientY} = event
      /* console.log(event)
      console.log('me estoy moviento por las coordenadas', { clientX, clientY }) */
      setPosicion({ x: clientX, y: clientY})
    }

    if (seguir) {
      window.addEventListener('pointermove', manejarMovimiento)
    }
    return () => {
      console.log('se reseteó')
      window.removeEventListener('pointermove', manejarMovimiento)
    }
  }, [seguir])

  return (
     <>
      {/* Circulo */}
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${posicion.x}px, ${posicion.y}px)`
      }}
      />
      {/* Botón */}
      <button onClick={() => setseguimiento(!seguir)}>
        {seguir ? 'Desactivar' : 'Activar' } seguimiento
      </button>
     </>
  )
}

function App () {

  return (
    <>
      <h3>Raton sigueme</h3>
      <main>
        <SeguimientoRaton></SeguimientoRaton>
      </main>
    </>
  )
}

export default App
