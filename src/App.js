import React from 'react';
import './App.css';

// My Imports
import NavBar from './components/Navbar/NavBar';
import Home from './containers/Home/Home';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <div className="container-fluid">
        <Home />
      </div>
    </div>
  );
}

export default App;
