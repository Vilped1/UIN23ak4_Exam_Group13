import { useNavigate } from "react-router-dom";

export default function Login({ allUsers, setMainUser }) {
  const navigate = useNavigate()

  const handleClick = (user) => {
    setMainUser(user)
    navigate("/home")
  };

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
