import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//API KEY: 9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14

function App() {

  const [query, setQuery] = useState("")

  /*const url = 'https://moviesdatabase.p.rapidapi.com/titles/{tt0086250}';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };*/

  const getData = async () => {
    try {
      const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/{tt0086250}`);
      const result = await response.text();
      console.log("it worked", result)
    } catch (error) {
      console.error(error);
    }
  }
  /*
    const getData = async() => {
      try {
        const response = await fetch(`https://rapidapi.com/SAdrian/api/moviesdatabase/`)
        const data = await response.json()
        setBooks(data.docs)
      } catch {
        console.error("Errorrr")
      }
    }*/

  return (
    <p></p>
  )
}

export default App
