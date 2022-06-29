import React from 'react'
import {SidebarContainer, Icon, CloseIcon} from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon size={120}/>
        </Icon>
    </SidebarContainer>
  )
}

export default Sidebar;