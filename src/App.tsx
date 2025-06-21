import React from 'react';
import NavBar from './NavBar';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header fade-in-up">
        <h1>Welcome to my first web app</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Totally not a copy of the React logo, but a placeholder image.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
