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
            <CloseIcon size={30}/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/about" onClick = {toggle}>
            About
            </SidebarLink>
            <SidebarLink to="/faq" onClick = {toggle}>
            FAQ
            </SidebarLink>
            <SidebarLink to="/contact" onClick = {toggle}>
            Contact Us
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/filter" onClick = {toggle}>
            Pick a restaurant!
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;