import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NotesState from './context/notes/NotesState';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  

} from "react-router-dom";

function App() {
  return (
  <>
      <NotesState>
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
        </Routes>    
          
            
        
        </Router>
      </NotesState>
   </> 
  );
}

export default App;
