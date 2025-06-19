import React from 'react';

const NavBar: React.FC = () => (
  <nav style={{
    background: '#282c34',
    padding: '10px 20px',
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <a href="/" style={{ color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' }}>Home</a>
    <a href="https://reactjs.org" style={{ color: '#fff', textDecoration: 'none' }}>React Docs</a>
    <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
  </nav>
);

export default NavBar;