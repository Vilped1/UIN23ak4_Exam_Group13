import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import Nav from "./components/Nav";
import "./App.css";
import GenreSection from "./components/GenreSection";
import FetchAllUsers from "../sanity/services/userService";
import UserCompare from "./components/UserCompare";
// import Login from "./components/Login"

export default function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [mainUser, setMainUser] = useState({
    _id: "badbfdda-8fef-4646-bc8b-3989b8e9e5c9",
    user: "Erik",
    favoriteMovies: ["The Flash", "Scarlet Piss Princess"],
    favoriteGenres: null,
  });
  const [compareUser, setCompareUser] = useState({
    _id: "f0fc50da-74b9-40a8-91bd-7fa8ed61383a",
    user: "Jesper",
    favoriteMovies: ["The Flash", "Abraham Lincoln Vampire Slayer"],
    favoriteGenres: null,
  });
  console.log(mainUser);

  const getAllUsers = async () => {
    const data = await FetchAllUsers();
    setAllUsers(data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      {/* <Login allUsers={allUsers} setMainUser={setMainUser} /> */}
      {/* <UserCompare/> */}
    </>
  );
}
