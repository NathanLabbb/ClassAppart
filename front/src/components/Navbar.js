import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#f2f2f2',
    padding: '10px',
  };

  const linkStyle = {
    marginRight: '10px',
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={linkStyle}>
        Index
      </Link>
      <Link to="/cart" style={linkStyle}>
        Cart
      </Link>
      <Link to="/add" style={linkStyle}>
        Add
      </Link>
    </nav>
  );
};

export default Navbar;
