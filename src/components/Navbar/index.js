import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

import { MobileIcon, Nav, NavLogo, NavMenu } from "./NavbarElements";

import logo from "../../images/logo.svg";

const Navbar = ({ toggle, alt }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavLogo to="/" onClick={toggleHome} className="text-white d-flex">
            <img
              src={logo}
              alt ={alt}
              className="w-75 h-75"
              style={{
                objectFit: "contain",
                objectPosition: "bottom center",
                maxHeight: "100vh",
              }}
            />
          </NavLogo>

          <NavMenu>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
          </NavMenu>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
