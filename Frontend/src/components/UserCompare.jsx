export default function UserCompare({
  user,
  setUser,
  compareUser,
  setCompareUser,
}) {
  const handleClick = (e) => {
    !user ? setUser(e.target.innerText) : setCompareUser(e.target.innerText)
  }

  console.log(user)

  return (
    <>
    <h1>SAMMENLIGNER!!!</h1>
      <h2>{user}</h2>
      <h2>{compareUser}</h2>
      <section>
        <button onClick={handleClick}>Tore Marius</button>
        <button onClick={handleClick}>Ann-Charlott</button>
        <button onClick={handleClick}>Daniela</button>
      </section>
    </>
  )
}
