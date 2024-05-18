import { Link } from "react-router-dom"

export default function Home({user, setUser, compareUser, setCompareUser}) {

    // const handleClick = (e) => {
    //     !user ? setUser(e.target.innerText) : setCompareUser(e.target.innerText)
    // }

    return (
        <>
        <h1>HOME!!</h1>
        <h2>Sammenling med</h2>
        <section>
            <Link to={"/Bruker-sammenlignet-med/" + (" ", "-")}><h3>Tore Marius</h3></Link>
        </section>
        </>
    )
}