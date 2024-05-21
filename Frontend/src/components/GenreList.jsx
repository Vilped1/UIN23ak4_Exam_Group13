import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  fetchAllGenres,
  updateFavGenre,
} from "../../sanity/services/genreServices";
import FetchAllUsers from "../../sanity/services/userService";

export default function GenreList({ allGenres, setGenre, mainUser }) {
  const [active, setActive] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedGenres = await fetchAllGenres();
      setGenres(fetchedGenres);

      const fetchedUsers = await FetchAllUsers();
      setUsers(fetchedUsers);

      setSelectedUser(mainUser);
    };

    fetchData();
  }, []);

  console.log("fetchGenres", genres);

  const handleClick = async (genre) => {
    setSelectedGenre(genre);
    if (selectedUser) {
      try {
        const result = await updateFavGenre(selectedUser, genre._id);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  };

  console.log("Selected User", selectedUser);

  const handleGenre = (genre) => {
    setGenre(genre);
  };
  return (
    <>
      <h2>Sjangere</h2>
      <ul id="genreList">
        {allGenres?.map((genre, index) => (
          <li key={genre._id} id={genre.genre}>
            <Link onClick={() => handleGenre(genre)} to={"/Sjanger/" + genre.genreurl.current}>
              {genre.genre.replace(("-"), (" "))}
            </Link>
            <span
              className={`star ${active.includes(genre) ? "active" : ""}`}
              onClick={() => handleClick(genre)}
            >
              {active.includes(genre) ? <FaStar /> : <FaRegStar />}
            </span>
          </li>
        ))}
      </ul>
      {/* <Login allUsers={allUsers} setMainUser={setMainUser} /> */}
      {/* <UserCompare/> */}
    </>
  );
}
