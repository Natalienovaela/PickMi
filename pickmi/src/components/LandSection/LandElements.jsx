import styled from "styled-components"
import Logo from '../../images/logo.png'
import {Link as LinkR} from 'react-router-dom';

export const LandContainer = styled.section`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    height: 1500px;
    align-items: flex-start;
    text-align: justify;
    position: relative;
    margin-top: 50px;
`
export const Landh1 = styled.h1`
    font-size: 1500%;
    color: #8c46b6;
    display: block;
    text-align: center;
    font-family: "Berkshire Swash", "Times New Roman";
    width: 100%;
    margin-bottom:0;
    position: absolute;
    top: -200px;

    @media screen and (max-width: 760px) {
        font-size: 1000%;
    }

    @media screen and (max-width: 480px) {
        font-size: 500%;
    }
`

export const Landp = styled.p`
    margin-top: 0;
    margin-bottom: 100px;
    color: purple;
    font-size: 1000%;
    text-align: center;
    z-index:0;
    position: absolute;
    bottom: 320px;
    font-family: "Times New Roman";

    @media screen and (max-width: 760px) {
        font-size: 500%;
    }

`

export const Pickmi = styled.img.attrs({
    src:`${Logo}`
})`
    display: block;
    align-items: center;
    height: auto;
    min-width: 2000px;
    margin-right: auto;
    margin-left: auto;
    float: none;
    position: relative;
`
export const LandContent = styled.div`
    z-index: 100;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-top: 7.5%;
    margin-bottom: auto;
    transform: translateY(-50%);
    top: 50%;
`

export const Button = styled(LinkR)`
    color: #fae1e1;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 7rem;
    border-radius: 2500px;
    padding: 50px 50px;
    background: #e16159;
    text-decoration: none;
    outline: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fae1e1;
        color: #e16159;
        font-size: 7.5rem;
        text-shadow: .05em .02em 0.02em hsl(4, 83%, 76%);
    }
`
export const ButtonWrp = styled.div`
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
`