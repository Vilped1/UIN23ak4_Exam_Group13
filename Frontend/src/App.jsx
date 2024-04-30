import { useState, useEffect } from "react"
import "./App.css"

export default function App() {
  const [content, setContent] = useState(null)
  // API KEY: 9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14

  const url = "https://moviesdatabase.p.rapidapi.com/titles/utils/genres/"
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  }

  const getGenres = async () => {
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      setContent(data.results)
      console.log(data.results)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getGenres()
  }, [])

  return (
    <div>
      {content &&
        content.map((genre, index) => (
          <div key={index}>
            <h2>{genre}</h2>
          </div>
        ))}
    </div>
  )
}
