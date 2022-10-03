import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Home';
import About from './About';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
