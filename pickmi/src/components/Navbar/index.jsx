import React from 'react';
/*import the logo from ;*/
import {Pickmi, Nav, NavbarContainer, NavbarLogo} from './NavbarElements';
import Logo from '../../images/logo.png'

const Navbar = () => {
  return (
      <Nav>
        <NavbarContainer>
          <NavbarLogo to='/'>
            <Pickmi src={Logo} alt="pickmi-logo"></Pickmi>
          </NavbarLogo>
        </NavbarContainer>
      </Nav>
  )
}

export default Navbar;