import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: hsl(234, 12%, 34%);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;

  transition: transform 0.3s ease-in-out;
  z-index: 1;

  @media (max-width: 800px) {
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
    position: fixed;
  }
  @media (min-width: 800px) {
    display: none;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #343078;
    }
  }
`;
