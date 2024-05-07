import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchGenres } from "../sanity/services/genreServices";
import { FetchUser } from "../sanity/services/userServices";

export default function App() {
  const [content, setContent] = useState(null);
  const [users, setUsers] = useState([]);

  // API KEY: 9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14

  const url = "https://moviesdatabase.p.rapidapi.com/titles/utils/genres/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":
        "9bc8085aa8msh993744cc96d23a2p16fabajsn08b818614d14",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const getGenres = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setContent(data.results);
      console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGenres();
    FetchUser().then((data) => {
      setUsers(data); 
    });
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      <div className="user-buttons">
        {users.map((user) => (
          <button key={user._id}>{user.user}</button> 
        ))}
      </div>
    </div>
  );
}