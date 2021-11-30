import styled from "styled-components";

export const TopLine = styled.p`
  color: #14232b;
  font-size: 40px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 280px) {
    font-size: 25px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 30px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: rgb(255, 255, 255);
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
  @media screen and (max-width: 280px) {
    font-size: 25px;
  }
`;

export const Subtitle = styled.p`
  font-size: 12px;
  line-height: 1.25;
  color: ${({ darkText }) => (darkText ? "#fff" : "#fff")};
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 5;

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const TeamP = styled.p`
  font-size: 1rem;
  color: #fff;
  justify-content: center;
  align-items: center;
  line-height: 1.25;
  margin-bottom: 30px;
  text-align: center;

  @media screen and (max-width: 812px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

export const Title = styled.p`
  font-size: 22px;
  line-height: 1;
  color: #14232b;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 812px) {
    font-size: 19px;
  }
`;
