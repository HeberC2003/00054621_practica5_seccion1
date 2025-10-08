import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
      />
      <Avatar
        size={80}
        person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }}
      />
      <Avatar
        size={50}
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      />
    </div>
  )
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Soy un botón custom y mi cuenta es: {count}
    </button>
  )
}

export default function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(c => c + 1)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <MyButton count={count} onClick={increment} />
        <p>
          Edita <code>src/App.jsx</code> y guarda para probar HMR
        </p>
      </div>

      <Profile />

      <p className="read-the-docs">
        Click en los logos de Vite y React para aprender más
      </p>
    </>
  )
}
