import { useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function Nav({ setSearchQuery }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(search);
    e.target.reset();
    console.log("Searching for...", `"${search}"`);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  document.addEventListener("Enter", handleSubmit);
  return (
    <>
      <nav>
        <section className="logoContainer">
          {/*https://github.com/react-icons/react-icons*/}
          <IconContext.Provider value={{ size: "4rem" }}>
            <BiCameraMovie />
          </IconContext.Provider>
          <h1>What to see?</h1>
        </section>
        <form onSubmit={handleSubmit} className="searchContainer">
          <input
            type="text"
            id="searchBar"
            placeholder="Søk etter film eller filmserie"
            onChange={handleChange}
            className="searchBar"
          />
          <input type="submit" value="Søk" className="searchButton" />
        </form>

        <section>
          <IconContext.Provider value={{ size: "1.6rem" }}>
            <FaUserCircle />
          </IconContext.Provider>
        </section>
      </nav>
    </>
  );
}
