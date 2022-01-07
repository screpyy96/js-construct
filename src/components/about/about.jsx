import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import info from '../../data/data.json';
import { StyledBox, StyledContainer, StyledImage, Styledtext } from './about';

const About = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(info);
  }, [data]);
  return (
    <StyledContainer>
      <StyledBox>
        {data.map((item) => (
          <div style={{ padding: 0 }} key={item.id}>
            <Styledtext>{item.description1}</Styledtext>
            <Styledtext>{item.description2}</Styledtext>
            <Styledtext>{item.description3}</Styledtext>
            <Styledtext>{item.description4}</Styledtext>
          </div>
        ))}
      </StyledBox>
      <StyledImage></StyledImage>
    </StyledContainer>
  );
};

export default About;
