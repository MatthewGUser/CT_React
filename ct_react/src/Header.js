import React from 'react';

const Header = () => {
  return (
    <header style={{ 
      backgroundImage: 'url(https://via.placeholder.com/1500)', // Replace with your desired background image URL
      height: '300px',
      backgroundSize: 'cover',
      color: 'white',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '3rem',
    }}>
      <h1>My React Assignment</h1>
    </header>
  );
};

export default Header;
