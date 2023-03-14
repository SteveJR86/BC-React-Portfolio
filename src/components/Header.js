import NavBar from './NavBar'

function Header(){
  return(
    <header style={{display: "flex", flexWrap: "wrap", alignItems: "center"}}>
      <h1>Steve Riley Webdesign</h1>
      <NavBar />
    </header>
  )
}

export default Header;