import Header from "./Header"

export default function Layout({ children, logedIn, setLogedIn, mainUser }) {
  const handleClick = () => {
    localStorage.setItem("logedIn", false)
    setLogedIn(false)
  }

  return (
    <>
      <div>
        {logedIn ? (
          <>
            <Header mainUser={mainUser} />
            <span>Brukernavn</span>
            <button onClick={handleClick}>Logg ut</button>
          </>
        ) : null}
      </div>
      <main>{children}</main>
      <footer>Copyright 2024 UIN</footer>
    </>
  )
}
