// import React from 'react'
// import { Link } from 'react-router-dom';
// import Logo from "../img/pacobanner.png"
import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links} from '../compenents/data.js';

import Logo from "../img/pacobanner.png"

export default function Header() {
   const [showLinks, setShowLinks] = useState(false);
   const linksContainerRef = useRef(null);
   const linksRef = useRef(null);
   const toggleLinks = () => {
     setShowLinks(!showLinks);
   };
   useEffect(() => {
     const linksHeight = linksRef.current.getBoundingClientRect().height;
     if (showLinks) {
       linksContainerRef.current.style.height = `${linksHeight}px`;
     } else {
       linksContainerRef.current.style.height = '0px';
     }
   }, [showLinks]);
  return (
    <header>
      {/* <div className='logo'>
        <h3>
          <Link to='/products'>
            <img
              src={Logo}
              alt=''
            />
          </Link>
        </h3>
      </div>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/products'>products</Link>
        </li>
        <li>
          <Link to='/'>About</Link>
        </li>
        <li>
          <Link to='/'>Contact</Link>
        </li>
        <li>
          <Link to='/'>login / Register</Link>
        </li>
        <li>
          <i class='fa-solid fa-square-xmark'></i>
        </li>
      </ul>
      <div className='menu'>
        <i class='fa-solid fa-bars'></i>
      </div> */}

      <nav className='nav'>
        <div className='nav-center'>
          <div className='nav-header'>
            <img src={Logo} className='logo' alt='logo' />
            <button className='nav-toggle' onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>
          <div className='links-container' ref={linksContainerRef}>
            <ul className='links' ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
