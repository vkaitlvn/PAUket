import React from "react";

import ConnectButton from "../Navbar/ConnectButton";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SocialIconLink,
  SidebarLinkSocial,
  SocialIcons,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            ABOUT
          </SidebarLink>
          <SidebarLink to="pauket" onClick={toggle}>
            PAUket APP
          </SidebarLink>
          <SidebarLink to="security" onClick={toggle}>
            PUBLIC SAFETY
          </SidebarLink>
          <SidebarLink to="events" onClick={toggle}>
            CAMPUS LIFE
          </SidebarLink>
          <SidebarLink to="location" onClick={toggle}>
            LOCATION SERVICES
          </SidebarLink>
          <SidebarLink to="friend" onClick={toggle}>
            FIND A FRIEND
          </SidebarLink>
          <SidebarLink>
            <ConnectButton />
          </SidebarLink>

          <SidebarLinkSocial></SidebarLinkSocial>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
