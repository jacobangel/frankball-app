import React, { useState } from 'react';
import './Header.css';

export const Header = (props) => {
  return (
    <div className="Header">
      <h1>Frank's Dumb App</h1>
      <nav>
        <ul>
          <li><a>Reset Game</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default { Header };