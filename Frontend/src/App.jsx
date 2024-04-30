import { useState, useEffect } from "react"
import React from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";
import User from "./components/Header";

function App() {
  return (
    <div className="App">
      <MovieCard/>
      <User/>
    </div>

  );
}

export default App;
