import Header from "./Header"

export default function Layout({ children, logedIn, setLogedIn, mainUser }) {
  return (
    <>
      <div>
        {logedIn ? (
          <>
            <Header mainUser={mainUser} setLogedIn={setLogedIn} />
          </>
        ) : null}
      </div>
      <main>{children}</main>
      <footer>Copyright 2024 UIN</footer>
    </>
  )
}
