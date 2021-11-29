import { Router } from '@reach/router';
import React from 'react';
import Home from '../home/home';
import About from '../about/about';
import Services from '../services/services';

import { LinkWrapper, Logo, StyledLink, Wrapper } from './desktop.styled';
import Contact from '../contact/contact';

const DesktopNav = () => {
  return (
    <div>
      <Wrapper>
        <Logo>J.S Construct LTD</Logo>
        <LinkWrapper>
          <StyledLink to='/'>Home</StyledLink>
          <StyledLink to='/about'>About</StyledLink>
          <StyledLink to='/services'>Services</StyledLink>
          <StyledLink to='/contact'>Contact</StyledLink>
        </LinkWrapper>
      </Wrapper>
      <Router>
        <Home path='/' />
        <About path='/about' />
        <Contact path='/contact' />
        <Services path='/services' />
      </Router>
    </div>
  );
};

export default DesktopNav;
