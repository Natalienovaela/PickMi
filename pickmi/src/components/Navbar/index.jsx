import React from 'react';
/*import the logo from ;*/
import {Pickmi, Nav, NavbarContainer, NavbarLogo, MobileIcon} from './NavbarElements';
import Logo from '../../images/logo.png'
import {FaBars} from 'react-icons/fa'

const Navbar = ({toggle}) => {
  return (
      <Nav>
        <NavbarContainer>
          <NavbarLogo to='/home'>
            <Pickmi src={Logo} alt="pickmi-logo"></Pickmi>
          </NavbarLogo>
          <MobileIcon onClick={toggle}>
            <FaBars size={150}/>
          </MobileIcon>
        </NavbarContainer>
      </Nav>
  )
}

export default Navbar;