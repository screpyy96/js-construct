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
  margin: 30px 0;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardWrapper = styled.div`
  background-color: #fff;
  padding: 30px;
  width: 300px;
  height: 300px;
  margin: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5), 0 6px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  border-radius: 5px;
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
  flex-wrap: wrap;
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
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
