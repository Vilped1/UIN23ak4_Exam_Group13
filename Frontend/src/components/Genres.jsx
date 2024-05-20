import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Genres({content, setContent}) {
  const [active, setActive] = useState()
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
      const result = await response.json()
      //Fjerner objektet på indeks 0 i arrayen siden denne er satt til "null"
      result.results.splice(0, 1)
      console.log(result.results)
      setContent(result.results)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => { getGenres()  }, [active])

  return (
    <div id="genreSection">
      {content &&
        content.map((genre, index) => (
            <li>
            <Link to={"/Sjanger/" + genre.toLowerCase()}><h2>{genre.replaceAll("-", " ")}</h2></Link>
            </li>
        ))}
    </div>
  )
}
