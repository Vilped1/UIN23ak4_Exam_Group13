import Header from "./Header"

export default function Layout({ children, mainUser, logedIn, setLogedIn, setMainUser, setCompareUser }) {
  return (
    <>
      {logedIn ? (
        <>
          <Header mainUser={mainUser} setLogedIn={setLogedIn} setMainUser={setMainUser} setCompareUser={setCompareUser} />
        </>
      ) : null}
      <main>{children}</main>
      <footer>Copyright 2024 UIN</footer>
    </>
  )
}
