import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 90px;
  background: #f5ad4b;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "25px" : "22px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  margin-bottom: 6px;

  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #745434;
    color: #fff;
  }
`;
