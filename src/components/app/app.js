import { Router } from '@reach/router';
import React from 'react';
import Footer from '../footer';
import Navbar from '../navbar';
import Bishop from '../pages/Bishop';
import Euston from '../pages/euston';
import Hackney from '../pages/hackney';
import HidePark from '../pages/hide-park';

const App = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <Router>
        <Bishop path='/one-bishopgate-liverpool-street' />
        <HidePark path='refurbished-hyde-park-corner' />
        <Euston path='university-college-hospital-euston' />
        <Hackney path='office-refurbishment-hackney' />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
