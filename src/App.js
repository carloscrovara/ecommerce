import React from 'react';
import logo from './logo.svg';
import './App.css';
import Salute from './components/Salute/Salute'; 
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div>
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Salute />
      </header>
    </div>
  );
}

export default App;