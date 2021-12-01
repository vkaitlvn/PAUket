import React from "react";

import { Button } from "../ButtonElements.js";


import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLinkSocial,
  
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
          <SidebarLink>
          <Button to="/about">LOG IN WITH ECAMPUS</Button>

          </SidebarLink>

          <SidebarLinkSocial></SidebarLinkSocial>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
