export default function Login({ allUsers, setMainUser }) {
  const handleClick = (e) => {
    setMainUser(e)
  }

  return (
    <>
      <h1>Hvem skal se i dag?</h1>
      <p>Velg bruker</p>
      {allUsers?.map((user) => (
        <button key={user._id} onClick={() => handleClick(user._id)}>
          {user.user}
        </button>
      ))}
    </>
  )
}
