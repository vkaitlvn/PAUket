import React from "react";
import { animateScroll as scroll } from "react-scroll";


import {
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  
} from "./FooterElements";

const toggleHome = () => {
  scroll.scrollToTop();
};

const Footer = () => {
  return (
    <div style={{ background: "#000000" }}>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper></FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              PAUKET
            </SocialLogo>
            <WebsiteRights>
              PAUket © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </div>
  );
};

export default Footer;
