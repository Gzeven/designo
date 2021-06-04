import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import {LogoDark } from '../assets';
import styled from 'styled-components'
import { Spin as Hamburger } from 'hamburger-react'



const Navbar = () => {
  
  const [showLinks, setShowLinks] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const linksContainterRef = useRef(null);
  const linksRef = useRef(null);
  
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if(showLinks) {
      linksContainterRef.current.style.height = `${linksHeight}px` 
    } else {
      linksContainterRef.current.style.height = '0px'
    }
    
  }, [showLinks])

 const closeMenu = () => {
   setOpen(false)
   setShowLinks(false)
 }


  return <NavContainer>
  
  <div className="nav-center">
  <div className="nav-header">
  <Link to="/"><img src={LogoDark} alt="Designo" className="logo" /></Link>
  <Hamburger className='nav-toggle' size={24} toggled={isOpen} toggle={setOpen} color="#1D1C1E" label="Show menu" distance="sm" onToggle={toggled => {
  if (toggled) { setShowLinks(true) 
  } else {
     setShowLinks(false)
  }
}}>
  </Hamburger>

  </div>
  
   <div className='links-container' ref={linksContainterRef}>
  <ul className="links" ref={linksRef}>
  
  {links.map((link)=> {
    const {id, url, text} = link;
    return <li onClick={() => {closeMenu()}} key={id}><Link  to={url}>{text}</Link></li>
  })}
  
  
  </ul>
  </div> 
  {showLinks && <div className="overlay"></div> }
  </div>
  
  </NavContainer>
}


const NavContainer = styled.nav`

.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  padding: 0 1.5rem;
  position: relative;
  z-index: 100;
  background: var(--white);
  .logo {
  height: 27px;
}

.hamburger-react {
  margin-bottom: 0.5rem;
}

}
.links-container {
  height: 0;
  overflow: hidden;
  transition: var(--transition);
  background-color:var(--black);
  width: 100%;
  position: absolute;
  z-index: 90;
   
}
.links {
  padding: 1.5rem 0;
   
}
.links a {
  color: var(--white);
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: var(--spacing);
  display: block;
  padding: 1.5rem 1rem;
  transition: var(--transition);
}  
.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background: var(--black);
    left: 0;
    top: 0;
    cursor: pointer;
    opacity: 0.5;  
    transition: var(--transition);
    z-index: 2; 
}

@media screen and (min-width: 768px) {
  .overlay {
    display: none;
  }
   .nav-center {
     width: 89.714vw;
     height: 9.688rem;
     max-width: var(--max-width);
     margin: 0 auto;
     display: flex;
     align-items: center;
    justify-content: space-between; 
   }
     .nav-header {
    padding: 0;
   
  }
 
  .hamburger-react {
    display: none;
  }


   .links-container {
     position: relative;
     height: auto !important;
    background-color: transparent;
   }
  .links {
     display: flex;
     justify-content: flex-end;
     margin-bottom: 0.5rem;
   }
   .links a {
   position: relative;
   color: var(--black);
   padding: 0;
   font-size: 14px;
   margin-left: 2.625rem;
   :before {
  content: "";
  position: absolute;
  opacity: 0.5;
  width: 100%;
  height: 1px;
  bottom: 5px;
  left: 0;
  background-color: var(--black);
  visibility: hidden;
  transform: scaleX(0);
  transition: var(--transition);
}
   :hover:before  {
     visibility: visible;
     transform: scaleX(1);
     
   }
   }
  
}

@media screen and (min-width: 1281px) {
  .nav-center {
    width: 77.153vw;
  }
}

`

export default Navbar


