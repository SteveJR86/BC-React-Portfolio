function Home(){
  return (
    <main style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h2>Home Page</h2>
      <img src='https://placekitten.com/300/300' alt='kitten who is head of design' />
      <h3>Making the web more accessible</h3>
      <p style={{maxWidth: "80ch"}}>
        Welcome to my portfolio website where you can see some of my previous work 
        and get in touch to find out how I can help you improve your presence on the
        internet in a way thats accessible to all.
      </p>
    </main>
  )
}

export default Home;