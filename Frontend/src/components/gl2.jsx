import { useState, useEffect } from "react";
import {
  fetchAllGenres,
  updateFavGenre,
} from "../../sanity/services/genreServices";
import FetchAllUsers from "../../sanity/services/userService";

export default function GenreList() {
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

      setSelectedUser(fetchedUsers[4]);
    };

    fetchData();
  }, []);

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

  return (
    <>
      <section className="genreSection">
        {genres.map((genre, index) => (
          <article
            className={`genreCard ${
              selectedGenre?._id === genre._id ? "active" : ""
            }`}
            key={index}
            style={{ backgroundImage: `url(${genre.genreimage})` }}
            onClick={() => handleClick(genre)}
          >
            <h3>{genre.genre}</h3>
          </article>
        ))}
      </section>
    </>
  );
}
