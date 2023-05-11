import React from 'react'
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'
import './Header.scss';

const Header = () => {
  return (
    <nav>
      <h1>Lorem</h1>
      <main>
      <HashLink to={"/#home"}>Home</HashLink>
      <HashLink to={"/#about"}>About</HashLink>
      <HashLink to={"/contact"}>Contact</HashLink>
      <HashLink to={"/#profiles"}>Profiles</HashLink>
      <HashLink to={"/services"}>Services</HashLink>
      
      </main>
    </nav>
  );
}

export default Header;
