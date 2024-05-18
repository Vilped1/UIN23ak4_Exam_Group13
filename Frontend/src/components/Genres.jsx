import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Genres({content, setContent}) {
  const [active, setActive] = useState([])
  const [toggleStar, setToggleStar] = useState(false)
  // const {slug} = useParams()
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
      // Fjerner objektet på indeks 0 i arrayen siden denne er satt til "null"
      result.results.splice(0, 1)
      console.log(result.results)
      setContent(result.results)
    } catch (error) {
      console.error(error)
    }
  }

  // const handleClick = (clickedStar) => {
  //   // setToggleStar(clickedStar)
  //   // setToggleStar(!toggleStar)
  //   // const favorite += setActive(clickedStar)
  //   setActive(clickedStar)
  //   // favorite += {acti}
  //   // const exist = active.find(item => item.genre === content.genre)
  //   // setActive((prevActive) =>
  //   //   exist ? prevActive.map(item => item.genre === content.genre ? { ...item} : item)
  //   // :
  //   // [...prevActive, { ...content}])
  //   // console.log(exist, "finnes")
  //   console.log(active)
  //   console.log(toggleStar)
  // }

  // Chat-GPT
  const handleClick = (clickedGenre) => {
    setActive((prevActive) => {
      if(prevActive.includes(clickedGenre)) {
        return prevActive.filter((genre) => genre !== clickedGenre)
      } else {
        return [...prevActive, clickedGenre]
      }
    })
  }
  // 

  useEffect(() => {
    getGenres()
    console.log(active)
  }, [active])

  return (
    <div id="genreSection">
      {content &&
        content.map((genre, index) => (
            <li key={index} id={genre}>
            <Link to={"/Sjanger/" + genre.toLowerCase()}><h2>{genre.replaceAll("-", " ")}</h2></Link>
            <span className={`star ${active.includes(genre) ? "active" : ""}`} onClick={() => handleClick(genre)} >
              {active.includes(genre) ? <FaStar /> : <FaRegStar /> }
            </span>
            </li>
        ))}
    </div>
  )
}
