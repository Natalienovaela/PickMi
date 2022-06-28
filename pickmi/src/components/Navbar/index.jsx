import React from 'react';
/*import the logo from ;*/
import {Pickmi, Nav, NavbarContainer, NavbarLogo, MobileIcon} from './NavbarElements';
import Logo from '../../images/logo.png'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
  return (
      <Nav>
        <NavbarContainer>
          <NavbarLogo to='/'>
            <Pickmi src={Logo} alt="pickmi-logo"></Pickmi>
          </NavbarLogo>
          <MobileIcon>
            <FaBars size={115}/>
          </MobileIcon>
        </NavbarContainer>
      </Nav>
  )
}

export default Navbar;