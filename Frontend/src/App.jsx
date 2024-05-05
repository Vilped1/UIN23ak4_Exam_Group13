import { useState, useEffect } from "react"

<<<<<<< Updated upstream
import "./App.css"
// API KEY: 9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14
=======
export default function App() {
  const [content, setContent] = useState([]);
  /* const [query, setQuery] = useState(""); */
  // API KEY: 9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14
>>>>>>> Stashed changes

const url =
  "https://moviesdatabase.p.rapidapi.com/titles/search/title/the%20shining?exact=false&titleType=movie"
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
}

function App() {
  const getMovie = async () => {
    try {
      const response = await fetch(url, options)
      const result = await response.json()
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMovie()
  }, [])

  const [content, setContent] = useState("")

  /*   const fetchData = async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=Action`
      );
      const data = await response.json();
      setContent(data.results);

      console.log(content);
    } catch {
      console.error("Det har skjedd en feil");
    }
  }; */

  /*   const url = "https://moviesdatabase.p.rapidapi.com/titles?genre=Action";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
<<<<<<< Updated upstream
      setContent(data);
      console.log(content);
=======
      setContent(data.results);
>>>>>>> Stashed changes
    } catch (error) {
      console.error(error);
    } */

  /*   useEffect(() => {
    fetchData();
  }, []); */

  return <></>
}

export default App
