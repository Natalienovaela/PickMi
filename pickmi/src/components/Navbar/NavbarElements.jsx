import styled from "styled-components"
import {Link as LinkR} from 'react-router-dom'
import Logo from '../../images/logo.png'

export const Nav = styled.nav`
    /*background: #745454;*/
    height: 77.5px;
    width: 100%;
    display: inline-block;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 20px;
    width: 100%;
    padding: 0 6px;
    max-width: 1100px;
   /* background: #745454;*/
`

export const NavbarLogo = styled(LinkR)`
    display: flex;
    align-items: center;
    color: red;
   /* background:#745454;*/
    width: 125px;
    height:auto;
`

export const Pickmi = styled.img.attrs({
    src:`${Logo}`
})`
    cursor: pointer;
    display: inline-block;
    height: auto;
    max-width: 100%;
    margin-top:47.5%;
    margin-left:12.5%;
`

export const MobileIcon = styled.div`
    display: inline-block;
    position: absolute;
    top:6.1%;
    align-items:center;
    transform: translate(-50%, -50%);
    right:0.45%;
    font-size: 1.8rem;
    cursor: pointer;
    color: purple;
    height: 6.45%;

`