import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import Nav from "./components/Nav";
import "./App.css";
import GenreSection from "./components/GenreSection";

export default function App() {
  const [content, setContent] = useState([]);
  const [genreQuery, setGenreQuery] = useState("Action");
  const [searchQuery, setSearchQuery] = useState("");
  // API KEY: 9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14
  // git shortlog -sn --all --since=1.year

  const genreUrl = `https://moviesdatabase.p.rapidapi.com/titles?limit=20&startYear=2015&endYear=2023&genre=${genreQuery}`;

  const searchUrl = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${searchQuery}?exact=false&titleType=movie&limit=20`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const fetchGenre = async () => {
    try {
      const response = await fetch(genreUrl, options);
      const data = await response.json();
      setContent(data.results);
      setGenreQuery(genreQuery);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSearch = async () => {
    try {
      const response = await fetch(searchUrl, options);
      const data = await response.json();
      setContent(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  useEffect(() => {
    fetchGenre();
  }, [genreQuery]);

  useEffect(() => {
    fetchSearch();
    setGenreQuery("");
  }, [searchQuery]);

  return (
    <>
      <Nav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <GenreSection
        content={content}
        setContent={setContent}
        genreQuery={genreQuery}
        setGenreQuery={setGenreQuery}
      />
      <h2 className="selectedGenre">
        {genreQuery
          ? genreQuery
          : `Showing ${content?.length} results for: "${searchQuery}"`}
      </h2>
      <MovieCard
        content={content}
        setContent={setContent}
        searchQuery={searchQuery}
      />
    </>
  );
}
