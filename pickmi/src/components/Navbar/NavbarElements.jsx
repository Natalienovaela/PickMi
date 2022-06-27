import styled from "styled-components"
/*import {Link} from "react-scroll"*/
import {Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
    background: #ffffff;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavbarLogo = styled(LinkR)`
    cursor: pointer;
    display: flex;
    align-items: center;
    color: red;
    text-decoration: none;
`