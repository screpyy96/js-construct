import React from 'react';
import { Router } from '@reach/router';
import HeroWrapper, { HeroText, HeroFilter } from './hero.styled';
import { ContactLink } from '../menu/desktop.styled';
import Contact from '../contact/';

const Hero = () => {
  return (
    <>
      <HeroFilter>
        <HeroWrapper />
        <HeroText>Loyalty. Customer Focus. Exceeding Expectations</HeroText>
        <div>
          <ContactLink to='/contact'>Contact Us</ContactLink>
        </div>
      </HeroFilter>

      <Router>
        <Contact path='/contact' />
      </Router>
    </>
  );
};

export default Hero;
