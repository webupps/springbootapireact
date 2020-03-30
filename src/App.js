import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// My Imports
import NavBar from './components/Navbar/NavBar';
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <NavBar />
          <Routes />
        </Router>
      </header>
    </div>
  );
}

export default App;
