import './Home.css';

function Home(){
  return (
    <main className='home'>
      <h2>Home Page</h2>
      <section className="content">
        <img src='https://placekitten.com/300/300' alt='kitten who is head of design' />
        <div className='text'>
          <h3>Making the web more accessible</h3>
          <p className='welcome-message'>
            Welcome to my portfolio website where you can see some of my previous work 
            and get in touch to find out how I can help you improve your presence on the
            internet in a way thats accessible to all.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home;