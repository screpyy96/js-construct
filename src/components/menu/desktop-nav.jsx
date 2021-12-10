import { Router } from '@reach/router';
import React from 'react';
import Home from '../home/home';
import About from '../../components/about';
import Projects from '../projects/';

import { Logo, StyledLink, Wrapper } from './desktop.styled';
import Contact from '../contact/contact';

const DesktopNav = () => {
  return (
    <div>
      <Wrapper>
        <Logo>J.S Construct LTD</Logo>
        <div>
          <StyledLink to='/'>Home</StyledLink>
          <StyledLink to='/about'>About</StyledLink>
          <StyledLink to='/projects'>Projects</StyledLink>
          <StyledLink to='/contact'>Contact</StyledLink>
        </div>
      </Wrapper>
      <Router>
        <Home path='/' />
        <About path='/about' />
        <Contact path='/contact' />
        <Projects path='/projects' />
      </Router>
    </div>
  );
};

export default DesktopNav;
