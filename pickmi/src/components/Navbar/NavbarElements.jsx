import styled from "styled-components"
import {Link as LinkR} from 'react-router-dom'
import Logo from '../../images/logo.png'

export const Nav = styled.nav`
    /*background: #745454;*/
    height: 310px;
    width: 100%;
    display: inline-block;
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
   /* background: #745454;*/
`

export const NavbarLogo = styled(LinkR)`
    display: flex;
    align-items: center;
    color: red;
   /* background:#745454;*/
    width: 50%;
    height:auto;
`

export const Pickmi = styled.img.attrs({
    src:`${Logo}`
})`
    cursor: pointer;
    display: inline-block;
    height: auto;
    max-width: 80%;
    margin-top:47.5%;
    margin-left:10%;
`

export const MobileIcon = styled.div`
    display: inline-block;
    position: absolute;
    top:7.4%;
    align-items:center;
    transform: translate(-50%, -50%);
    right:3.5%;
    font-size: 1.8rem;
    cursor: pointer;
    color: purple;
    height: 6.45%;

`