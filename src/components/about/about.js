import styled from 'styled-components';

export const Styledtext = styled.div`
  font-size: 1.3rem;
  /* color: #fff; */
  text-align: center;
  margin-top: 2rem;
`;

export const StyledContainer = styled.div`
  background-color: #f5f5f5;
  padding: 3rem;
  min-height: 87.5vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;

export const StyledBox = styled.div`
  height: 100%;
  /* width: 100%; */
  background-color: #f5f5f5;
`;

export const StyledImage = styled.div`
  border: 2px solid black;
`;
