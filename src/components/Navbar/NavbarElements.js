import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #${({ scrollNav }) => (scrollNav ? "#008ddf" : "transparent")};
  height: 80px;
  width: 100%;
  margin-top: -80px;

  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  padding: 5px 10px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavLogo = styled(LinkR)`
  cursor: pointer;

  img {
    width: 80px;
    height: 55px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 35px;
  cursor: pointer;
  padding: 0px;
  align-self: flex-end;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  width: 100%;
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #0199bf;
  }

  &:hover {
    color: #000000;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #7099d9;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #7099d9;
  }
`;

export const SocialMedia = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }

  display: flex;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 20px;

  padding: 2px;
  margin: 0 px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
