import React, { useState, useEffect } from 'react';
import {
  CardWrapper,
  Container,
  Image,
  Paragraph,
  StyledBtn,
  StyledLink,
  Title,
} from './projects.styled';
import info from '../../data/projects.json';

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(info);
  }, [data]);

  return (
    <div>
      <Container>
        {data.map((item) => (
          <CardWrapper key={item.id} color={item.color}>
            <Title>{item.title}</Title>
            <Paragraph>{item.PDescription}</Paragraph>
            <Image src={item.image} />
            <StyledBtn color={item.color}>
              <StyledLink to={`${item.link}`}>View Project</StyledLink>
            </StyledBtn>
          </CardWrapper>
        ))}
      </Container>
    </div>
  );
};

export default Projects;
