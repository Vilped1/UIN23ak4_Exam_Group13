export default function UserCompare({ allUsers, compareUser, setCompareUser, activeUser, setActiveUser }) {
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
        <div className="user-buttons">
          {allUsers.map((user) => (
            <button onClick={handleClick} key={user._id}>
              {user.user}
            </button>
          ))}
        </div>
      </section>
    </>
  )
}
