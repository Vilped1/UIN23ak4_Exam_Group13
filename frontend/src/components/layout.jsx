import Header from "./Header"

export default function Layout({ children, mainUser, logedIn, setLogedIn, setMainUser, setCompareUser }) {
  return (
    <>
      <div>
        {logedIn ? (
          <>
            <Header mainUser={mainUser} setLogedIn={setLogedIn} setMainUser={setMainUser} setCompareUser={setCompareUser} />
          </>
        ) : null}
      </div>
      <main>{children}</main>
      <footer>Copyright 2024 UIN</footer>
    </>
  )
}
