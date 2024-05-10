import './App.css';
import {
  BrowserRouter as Router,

  Route,

} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />

        <Route path="/">
          <Home />
          <Route path="/about">
            <About />
          </Route>
        </Route>


      </Router>
    </>
  );
}

export default App;
