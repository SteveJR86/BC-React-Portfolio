import NavBar from './NavBar'

function Header(){
  return(
    <header style={{display: "flex", flexWrap: "wrap"}}>
      <h1>Steve Riley Webdesign</h1>
      <NavBar />
    </header>
  )
}

export default Header;