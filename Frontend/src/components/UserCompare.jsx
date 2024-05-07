export default function UserCompare({
  users,
  setUsers,
  compareUser,
  setCompareUser,
  activeUser,
  setActiveUser,
}) {
  const handleClick = (e) => {
    !activeUser
      ? setActiveUser(e.target.innerText)
      : setCompareUser(e.target.innerText)
  }

  return (
    <>
      <section>
        <h1>User: {activeUser}</h1>
        <h2>Compare user: {compareUser} </h2>
        <div className="user-buttons">
          {users.map((user) => (
            <button onClick={handleClick} key={user._id}>
              {user.user}
            </button>
          ))}
        </div>
      </section>
    </>
  )
}
