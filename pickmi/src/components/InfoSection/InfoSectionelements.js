import styled from 'styled-components';
import homebg from '../../images/home_background.png';

export const InfoSec = styled.div`
color: #8C46B6;
padding: 120px 0;
background: ${({lightBg}) => (lightBg? '#fff' : '#101522')};
`

export const Container = styled.div`
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

export const Bg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const BgImage = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #000000;
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