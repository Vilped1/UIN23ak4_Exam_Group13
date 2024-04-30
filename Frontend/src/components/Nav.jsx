import { BiCameraMovie } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

export default function Nav() {
  return (
    <>
      <nav>
        <span className="logoContainer">
          {/*https://github.com/react-icons/react-icons*/}
          <IconContext.Provider value={{ size: "4rem" }}>
            <BiCameraMovie />
          </IconContext.Provider>
          <h1>MovieTube</h1>
        </span>

        <input className="searchBar" placeholder="Search for a film"></input>

        <span>
          <p>User 1</p>
        </span>
      </nav>
    </>
  );
}
