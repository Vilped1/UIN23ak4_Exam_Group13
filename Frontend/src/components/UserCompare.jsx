export default function UserCompare({ commonFavorites, user2, setUser2, user1, setUser1 }) {
  const handleClick = (e) => {
    !activeUser ? setActiveUser(e.target.innerText) : setCompareUser(e.target.innerText) && console.log(e.target.innerText)
  }

  return (
    <>
      <h1>SAMMENLIGNER!!!</h1>
      <section>
        <h1>User: {user1}</h1>
        <h2>Compare user: {user2} </h2>
        Common favorites:
        {commonFavorites.map((movie, index) => (
          <h3 key={index}>{movie}</h3>
        ))}
      </section>
    </>
  )
}
