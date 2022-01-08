import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* background-color: #f5f5f5; */
  padding: 0px;
  margin: 0px;
  min-height: 87.5vh;
`;

export const SendBtn = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* background-color: #f5f5f5; */
  padding: 10px;
  margin: 0px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;

// export const SendBtn = styled.input`
//   background-color: blue;
//   border: none;
//   border-radius: 6px;
//   padding: 4px 8px;
//   margin: 1rem;
//   color: white;
//   font-size: 1.2rem;
//   font-weight: bold;
//   cursor: pointer;
//   width: 15%;
//   transition: all 0.3s ease-in-out;
//   &:hover {
//     background-color: green;
//     color: black;
//   }
// `;
