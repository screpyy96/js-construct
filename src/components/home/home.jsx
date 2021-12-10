import React, { useState, useEffect } from 'react';
import info from '../../data/data.json';
import Hero from '../hero/hero';
import { ContainerText, Title } from './home.styled';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(info);
  }, [data]);

  return (
    <>
      <Hero />
      <ContainerText>
        {data.map((item) => (
          <div key={item.id}>
            <Title>{item.title}</Title>
            <p>{item.description}</p>
          </div>
        ))}
      </ContainerText>
    </>
  );
};

export default Home;
