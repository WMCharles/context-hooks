import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Home';
import About from './About';
import Nav from './Nav';
import { UserContext } from './UserContext';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Routes>
          <UserContext.Provider value="hello from context">
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
          </UserContext.Provider>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
