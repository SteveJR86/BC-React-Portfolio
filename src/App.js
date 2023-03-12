import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Portfolio/*' element={<Portfolio />}/>
        <Route path='/About' element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App;
