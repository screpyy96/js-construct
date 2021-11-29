import React from 'react';
import { Router, Link } from '@reach/router';
import { StyledMenu } from './menu.styled';
import Home from '../home/home';
import About from '../about/about';
import Contact from '../contact/contact';
import Services from '../services/services';

const Menu = ({ open, setOpen }) => {
  return (
    <div>
      <StyledMenu open={open} onClick={() => setOpen(false)}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/contact'>Contact</Link>
      </StyledMenu>
      <Router>
        <Home path='/' />
        <About path='/about' />
        <Contact path='/contact' />
        <Services path='/services' />
      </Router>
    </div>
  );
};

export default Menu;
