//Importerer header komponenten for å plassere den utenfor main. Dette er for å ha en fast plassering.
import Header from "./Header"

//Tar imot alle props som treng i Header komponentet
export default function Layout({ children, mainUser, logedIn, setLogedIn, setMainUser, setCompareUser }) {
  return (
    <>
      {logedIn ? (
        <>
          {/* Bruker betinge logikk for å ikke vise Header når det ikke en noen innlogget bruker */}
          <Header mainUser={mainUser} setLogedIn={setLogedIn} setMainUser={setMainUser} setCompareUser={setCompareUser} />
        </>
      ) : null}
      {/* Alle andre komponenter følger routing og ligger i childres */}
      <main>{children}</main>
      <footer>Copyright 2024 UIN</footer>
    </>
  )
}
