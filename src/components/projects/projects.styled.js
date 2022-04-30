import { Link } from '@reach/router';
import styled from 'styled-components';

export const Header = styled.h1`
  max-width: 500px;
  margin: 15px auto;
  margin-top: 50px;
  text-align: center;
  font-weight: 400;
`;
export const SubHeader = styled.span`
  font-weight: 600;
  max-width: 500px;
  margin: 50px auto;
  text-align: center;
`;

export const Paragraph = styled.p`
  color: hsl(299, 6%, 66%);
  font-size: 14px;
  margin: 10px 0;
`;
export const Image = styled.img`
  width: 250px;
  height: 150px;
`;

export const CardWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 300px;
  height: 370px;
  margin: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5), 0 6px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px;

  &:first-child {
    transform: translateY(50%);
  }
  &:nth-child(3) {
    transform: translateY(50%);
  }
  &:after {
    content: '';
    background-color: ${({ color }) => color};
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
  }
  @media (max-width: 1019px) {
    &:first-child {
      transform: translateY(0);
    }
    &:nth-child(3) {
      transform: translateY(0);
    }
  }
`;
export const Container = styled.div`
  padding-top: 10px;
  flex-wrap: wrap;
  display: flex;
  margin: 30px auto;
  max-width: 1200px;
  /* min-height: 82vh; */
  justify-content: center;
  @media (min-width: 800px) {
    max-width: 1200px;
    &:first-child {
      transform: translateY(0);
    }
  }
`;
export const Title = styled.h2`
  font-weight: 400;
  margin: 0;
`;
export const StyledBtn = styled.button`
  width: 100px;
  height: 30px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border: none;
  border-radius: 6px;
  background-color: ${({ color }) => color};
  cursor: pointer;
  position: absolute;
  right: 35px;
  bottom: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 14px;
`;
