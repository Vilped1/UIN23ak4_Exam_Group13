export default function UserCompare({ commonFavorites, allUsers, compareUser, setCompareUser, activeUser, setActiveUser }) {
  const handleClick = (e) => {
    !activeUser ? setActiveUser(e.target.innerText) : setCompareUser(e.target.innerText) && console.log(e.target.innerText)
  }

  return (
    <>
   
    </>
  )
}
