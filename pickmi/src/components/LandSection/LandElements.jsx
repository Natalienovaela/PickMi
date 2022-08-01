import styled from "styled-components"
import Logo from '../../images/logo.png'
import {Link as LinkR} from 'react-router-dom';

export const LandContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    height: 500px;
    align-items: flex-start;
    text-align: justify;
    position: relative;
    margin-top: 50px;
`
export const Landh1 = styled.h1`
    font-size: 495%;
    color: #8c46b6;
    display: block;
    text-align: center;
    font-family: "Berkshire Swash", "Times New Roman";
    width: 100%;
    margin-bottom:0;
    position: absolute;
    top: -50px;

    @media screen and (max-width: 760px) {
        font-size: 420%;
    }
`

export const Landp = styled.p`
    margin-top: 0;
    color: rgba(140, 70, 182, 0.5);
    font-size: 250%;
    text-align: center;
    z-index:0;
    position: relative;
    bottom: 70px;
    font-family: "Berkshire Swash", "Times New Roman";
    padding-top: 2.5px;

    @media screen and (max-width: 760px) {
        font-size: 200%;
        bottom: 50px;   
    }

    @media screen and (max-width: 665px) {
        font-size: 200%;
        bottom: 30px;   
    }

`

export const Pickmi = styled.img.attrs({
    src:`${Logo}`
})`
    display: inline-block;
    align-items: center;
    height: auto;
    max-width: 625px;
    margin-top: 5px;
    margin-right: auto;
    margin-left: auto;
    float: none;
    position: relative;

    @media screen and (max-width: 760px) {
        width: 90%;
        margin-top: 20px;
    }
`
export const LandContent = styled.div`
    z-index: 100;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 80%;
    margin-top: 1.875%;
    margin-bottom: auto;
    transform: translateY(-50%);
    top: 50%;
`

export const Button = styled(LinkR)`
    color: #fae1e1;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 1.75rem;
    border-radius: 625px;
    padding: 12.5px 12.5px;
    background: #e16159;
    text-decoration: none;
    outline: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fae1e1;
        color: #e16159;
        font-size: 1.875rem;
        text-shadow: .05em .02em 0.02em hsl(4, 83%, 76%);
    }
`
export const ButtonWrp = styled.div`
    margin-top: -75px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;

    @media screen and (max-width: 760px) {
        width: 90%;
        margin-top: -10%;
        padding-top: 1.5%;
    }
`