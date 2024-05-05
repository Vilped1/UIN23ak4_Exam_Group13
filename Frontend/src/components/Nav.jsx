import { BiCameraMovie } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
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
          <input className="searchBar" placeholder="Search for a film" />
        </span>

        <span>
          <IconContext.Provider value={{ size: "1.6rem" }}>
            <FaUserCircle />
          </IconContext.Provider>
        </span>
      </nav>
    </>
  );
}
