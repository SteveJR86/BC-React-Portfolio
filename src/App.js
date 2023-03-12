import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Portfolio/*' element={<Portfolio />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;
