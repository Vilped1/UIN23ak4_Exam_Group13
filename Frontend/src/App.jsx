import { useState, useEffect } from "react"
import "./App.css"
import { fetchGenres } from "../sanity/services/genreServices"
import { Routes, Route } from "react-router-dom"
import Genres from "./components/Genres"
import Layout from "./components/Layout"

export default function App() {
  const [content, setContent] = useState(null)
  // API KEY: 9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14

  // const url = "https://moviesdatabase.p.rapidapi.com/titles/utils/genres/"
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14",
  //     "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  //   },
  // }

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Genres />} />
        </Routes>
      </Layout>
    </>
  )
}
