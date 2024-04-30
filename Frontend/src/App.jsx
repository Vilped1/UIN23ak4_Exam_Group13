import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";

export default function App() {
  const [content, setContent] = useState([]);
  // API KEY: 9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14

  const url =
    "https://moviesdatabase.p.rapidapi.com/titles/search/title/the%20shining?exact=false&titleType=movie";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const getMovie = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setContent(data.results);
      console.log(content);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <MovieCard content={content} setContent={setContent} />
    </>
  );
}
