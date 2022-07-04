import React from 'react'
import {
  SidebarContainer,
  Icon, 
  CloseIcon, 
  SidebarWrapper,
  SidebarMenu, 
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon size={120}/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink class = "active" to="/about">About</SidebarLink>
            <SidebarLink to="/FAQ">FAQ</SidebarLink>
            <SidebarLink to="/Contact Us">Contact Us</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/home">Pick a restaurant!</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;