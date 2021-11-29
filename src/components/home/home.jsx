import React, { useState, useEffect } from 'react';
import info from '../../data/data.json';
import Hero from '../hero/hero';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(info);
  }, [data]);

  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
