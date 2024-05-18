export default function UserCompare({ commonFavorites, allUsers, compareUser, setCompareUser, activeUser, setActiveUser }) {
  const handleClick = (e) => {
    !activeUser ? setActiveUser(e.target.innerText) : setCompareUser(e.target.innerText) && console.log(e.target.innerText)
  }

  return (
    <>
      <h1>SAMMENLIGNER!!!</h1>
      <h2>{activeUser}</h2>
      <h2>{compareUser}</h2>
      <section>
        <h1>User: {activeUser}</h1>
        <h2>Compare user: {compareUser} </h2>
        <p>
          Common favorites:
          {commonFavorites.map((movie, index) => (
            <h3>{movie}</h3>
          ))}
        </p>
      </section>
    </>
  )
}
