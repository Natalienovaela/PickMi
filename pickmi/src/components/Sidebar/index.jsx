import React from 'react'
import {
  SidebarContainer,
  Icon, 
  CloseIcon, 
  SidebarWrapper,
  SidebarMenu, 
  SidebarLink} from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon size={120}/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/about">About</SidebarLink>
            <SidebarLink to="/FAQ">FAQ</SidebarLink>
            <SidebarLink to="/Contact Us">Contact Us</SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;