import styled from "styled-components";
import burgerImg from "../../assets/hamburger.jpg";

export const BurgerClose = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  color: black;
  position: relative;
  bottom: 285px;
  left: 200px;
  font-size: 30px
`;
export const BurgerOpen = styled.img.attrs({
  src: `${burgerImg}`,
})`
  width: 50px;
  height: 50px;
  margin: 10px;

`;

export const MenuWrapper = styled.div`
  visibility: ${({ burger }) => (burger ? "visible" : "hidden")}}};
  background-color: red;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


    & li {
        padding-top: 10px;
        margin: 10px;
        list-style: none;
      & a {
          color: white;
          font-size: 20px;
          text-decoration: none;
      }
  }
}
  `;

export const BurgerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
