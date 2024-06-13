import React from 'react';
import './Header.css';

const Header = () => (
    <header className="header">
        <h1>Anonime</h1>
        <p className='home'>Home</p>
        <p className='list'>List anime</p>
        <input type="text" placeholder="Search anime or movie" />
    </header>
);

export default Header;
