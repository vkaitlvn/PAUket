import styled from "styled-components";

export const TopLine = styled.p`
  color: #3c2a25;
  font-size: 40px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#f7f8fa")};
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media screen and (max-width: 280px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;
  line-height: 1.25;
  color: ${({ darkText }) => (darkText ? "#fff" : "#fff")};
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 0;

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }

  @media screen and (max-width: 280px) {
    font-size: 10px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }
`;
