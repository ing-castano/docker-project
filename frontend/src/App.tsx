import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([])

  const getBackendUserData = async () => {
    try {
    const response = await fetch('http://localhost:3001/users')
    const data = await response.json()
    setUsers(data)
    }
    catch (error) {
      console.error('Error fetching data:', error)
    }
  }


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
      <h1>Seminario DevOps - PFO2</h1>
      <div className="card">
        <h2>Listado de Usuarios</h2>
        <button onClick={() => getBackendUserData()}>
          Mostrar
        </button>
        <div>
          {users.length > 0 ? (
            <ul>
              {users.map((user: any) => (
                <li key={user.id}>
                  {user.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay usuarios disponibles</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App
