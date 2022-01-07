import { Link } from '@reach/router';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: hsl(234, 12%, 34%);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;

  @media (max-width: 600px) {
    display: none;
  }
`;
export const StyledLink = styled(Link)`
  margin: 1rem;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
`;
export const StyledLinks = styled(Link)`
  margin: 1rem;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;

  &:hover {
    display: block;
  }
`;

export const ContactLink = styled(Link)`
  position: absolute;
  bottom: 20%;
  right: 10%;
  color: white;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 6px;
  padding: 4px 8px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  color: white;
`;

export default StyledLink;
