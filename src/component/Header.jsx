
const Header =  ({user , setUser}) => {

  return (
    <>
    <span>welcome {user}!</span>

    <button onClick={()=> setUser("")}>Logout</button>
    </>
  )


}


export default Header