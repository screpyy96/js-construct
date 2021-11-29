import styled from 'styled-components';
import hero from '../../assets/hero.png';

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;
  background-image: url(${hero});
  background-position: center;
  background-size: cover;
  filter: opacity(0.9);

  @media (max-width: 500px) {
    margin-top: -32px;
    display: block;
    width: 100%;
    height: 50vh;
    background-image: url(${hero});
  }
`;

export const HeroText = styled.div`
  position: absolute;
  top: 40%;
  right: 50%;
  color: white;
`;

export const HeroFilter = styled.h1`
  position: relative;
`;

export default HeroWrapper;
