import styled from 'styled-components';

export const BurgerWrapper = styled.div`
  display: flex;
  position: sticky;
  justify-content: flex-end;
  top: 2rem;
  top: 3rem;
  right: 0;
  /* margin-right: 30px; */
  z-index: 2;
  background: transparent;
  width: 100%;
`;

export const StyledBurger = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  border: none;
  position: sticky;
  top: 0;
  right: 30px;

  &: focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) =>
      open ? 'hsla(24, 100%, 57%, 1)' : 'hsla(66, 100%, 57%, 1)'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    top: 0;
    right: 0;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
