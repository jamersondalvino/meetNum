import { useState } from 'react'
import './App.css'

function App() {
  const [estado, setEstado] = useState('Entrada')

  const [palpite, setPalpite] = useState(150)
  const [numPalpite, setNumPalpite] = useState(1)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(300)

  const iniciarJogo = () => {
    setEstado('Rodando')
    setPalpite(150)
    setNumPalpite(1)
    setMin(0)
    setMax(300)
  }
  if (estado === 'Entrada') {
    return (
      <button
        style={{ fontSize: '1.5em', fontWeight: 'bold', margin: '1em' }}
        onClick={iniciarJogo}
      >
        Começar a jogar!
      </button>
    )
  }

  const menor = () => {
    setNumPalpite(numPalpite + 1)
    setMax(palpite)
    const proxPalpite = parseInt((palpite - min) / 2) + min
    setPalpite(proxPalpite)
  }

  const maior = () => {
    setNumPalpite(numPalpite + 1)
    setMin(palpite)
    const proxPalpite = parseInt((palpite + max) / 2)
    setPalpite(proxPalpite)
  }

  const acertou = () => {
    setEstado('Fim')
  }
  if (estado === 'Fim') {
    return (
      <div>
        <p style={{ fontSize: '1.7em', fontWeight: 'bold' }}>
          Aceitei o número {palpite} com {numPalpite} chutes!
        </p>
        <button
          style={{ fontSize: '1.3em', fontWeight: 'bold', margin: '1em' }}
          onClick={iniciarJogo}
        >
          Iniciar Novamente!
        </button>
      </div>
    )
  }

  return (
    <div className="App">
      <div style={{ fontSize: '2em' }}>
        <p style={{ fontWeight: 'bold' }}>O seu número é {palpite}?</p>
        <p>
          Min: {min} / Max: {max}
        </p>

        <button
          style={{ fontSize: '0.7em', fontWeight: 'bold', margin: '1em' }}
          onClick={menor}
        >
          Menor!
        </button>
        <button
          style={{
            fontSize: '0.7em',
            fontWeight: 'bold',
            backgroundColor: 'greenyellow'
          }}
          onClick={acertou}
        >
          Acertou!
        </button>
        <button
          style={{ fontSize: '0.7em', fontWeight: 'bold', margin: '1em' }}
          onClick={maior}
        >
          Maior!
        </button>
      </div>
    </div>
  )
}

export default App
