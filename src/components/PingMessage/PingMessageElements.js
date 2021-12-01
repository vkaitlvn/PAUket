import styled from "styled-components";

export const TopLine = styled.p`
  color: #f5ad4b;
  font-size: 4rem;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 22px;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 800px;

  @media screen and (max-width: 280px) {
    font-size: 1rem;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 2rem;
  font-size: 9vw;
  line-height: 1;
  font-weight: 700;
  color: #fff;

  letter-spacing: 1.4px;
  text-transform: uppercase;

  max-width: 800px;

  @media screen and (max-width: 768px) {
    font-size: 8vw;
  }
`;
