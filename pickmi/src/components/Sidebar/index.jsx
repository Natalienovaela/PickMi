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

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
        <Icon onClick = {toggle}>
            <CloseIcon size={120}/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/about" onClick = {toggle}>
            About
            </SidebarLink>
            <SidebarLink to="/FAQ" onClick = {toggle}>
            FAQ
            </SidebarLink>
            <SidebarLink to="/Contact Us" onClick = {toggle}>
            Contact Us
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/home" onClick = {toggle}>
            Pick a restaurant!
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;