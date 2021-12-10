import React, { useState, useEffect } from 'react';
import {
  CardWrapper,
  Container,
  Image,
  Paragraph,
  StyledBtn,
  Title,
} from './projects.styled';
import info from '../../data/projects.json';
import { Link, Router } from '@reach/router';
import Bishop from '../pages/Bishop';

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
              <Link to={`${item.link}`}>View Project</Link>
            </StyledBtn>
          </CardWrapper>
        ))}
        <Router>
          <Bishop path='/bishop' />
        </Router>
      </Container>
    </div>
  );
};

export default Projects;
