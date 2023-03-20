import './Home.css';

function Home(){
  return (
    <main className='content'>
      <img className='profile-pic' src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt='Steve Riley enjoying a belgian beer.' />
      <div className='text'>
        <h2>Making the web more accessible</h2>
        <p className='welcome-message'>
          Welcome to my portfolio website where you can see some of my previous work 
          and get in touch to find out how I can help you improve your presence on the
          internet in a way thats accessible to all.
        </p>
      </div>
    </main>
  )
}

export default Home;