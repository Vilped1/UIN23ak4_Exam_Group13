export default function Login() {
    const handleClick = (e) => {
        setMainUser(e)
      }
    
      return (
        <>
          <h1>Hvem skal se i dag?</h1>
          <p>Velg bruker</p>
          {allUsers?.map((user) => (
            <button key={user._id} onClick={() => handleClick(user)}>
              {user.user}
            </button>
          ))}
        </>
      )
}