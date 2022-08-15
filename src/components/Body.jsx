import React from 'react';
import '../styles/Body.css';

const Body = ({ children }) => {
  return (
    <main class='content' id='links'>
      <ul>{children}</ul>
    </main>
  );
};

export default Body;
