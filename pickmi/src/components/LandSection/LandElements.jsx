import styled from "styled-components"
import {Link as LinkR} from 'react-router-dom'
import Logo from '../../images/logo.png'

export const LandContainer = styled.nav`
    display: center;
    justify-content: space-between;
    width: 80%;
    height: 90%;
    max-width: 1100px;
`

export const LandLogo = styled(LinkR) `
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
    max-width: 100%;
    margin-top:47.5%;
    margin-left:25%;
`