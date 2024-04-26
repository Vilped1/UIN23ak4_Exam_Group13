import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const getData = async() => {
    try {
      const response = await fetch(`https://rapidapi.com/SAdrian/api/moviesdatabase/`)
      const data = await response.json()
      setBooks(data.docs)
    } catch {
      console.error("Errorrr")
    }
  }

  return (
     <p></p>
  )
}

export default App
