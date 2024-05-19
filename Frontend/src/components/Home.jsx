import { Link } from "react-router-dom"

export default function Home({user, setUser, compareUser, setCompareUser}) {

    // const handleClick = (e) => {
    //     !user ? setUser(e.target.innerText) : setCompareUser(e.target.innerText)
    // }

    return (
        <>
        <h1>Hei user...!</h1>
        <h2>Filmer jeg skal se</h2>
        <h3>Disse filmene ligger i ønskelisten min:</h3>
        <h2>Jeg skal se sammen med...</h2>
        </>
    )
}