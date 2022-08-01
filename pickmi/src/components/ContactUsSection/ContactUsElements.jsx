import styled from 'styled-components';
import {FaEnvelope} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

export const EmailIcon = styled(FaEnvelope) `
    color: #8C46B6;
`

export const LinkedinIcon = styled(FaLinkedin) `
    color: #8C46B6;
`

export const GithubIcon = styled(FaGithub) `
    color: #8C46B6;
`

export const ContactContainer = styled.div`
color: #8C46B6;
z-index: 1;
width: 100%;
maz-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px) {
    padding-right: 50px;
    padding-left: 50px;
}
`

export const InfoRow = styled.div`
position: absolute;
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')}; 
// idt this is needed tbh
`

export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 25px;

@media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
}
`

export const TextWrapper = styled.h2`
padding-left: 70px;
font-size: 35px;

@media screen and (max-width: 668px) {
    padding-left: 30px;
    font-size: 30px;
}
`

export const TitleWrapper = styled.h1`
max-width: 540px;
padding-bottom: 10px;
padding-left: 20px;
font-size: 60px;

@media screen and (max-width: 668px) {
    padding-left: 10px;
    font-size: 50px;
}
`

export const SocialIcon = styled.div`
max-width: 540px;
padding: 20px;
padding-top: 0px;
display: inline-block;
flex: 1;
}
`