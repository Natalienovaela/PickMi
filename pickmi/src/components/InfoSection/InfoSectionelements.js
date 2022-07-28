import styled from 'styled-components';
import homebg from '../../images/home_background.png';

export const InfoSec = styled.div`
color: #8C46B6;
padding: 160px 0;
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

@media screen {
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
@media screen {
    max-height: 100%;
    flex-basis: 100%;
}
`

export const BgImage = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #000000;
@media screen {
    max-height: 100%;
    flex-basis: 100%;
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
padding-left: 15px;

@media screen {
    max-width: 100%;
    flex-basis: 100%;
}
`

export const TextWrapper = styled.h2`
max-width: 540px;
padding-top: 0;

@media screen and (max-width: 768px) {
    padding-bottom: 65px;
}
`
export const TitleWrapper = styled.h1`
max-width: 540px;
padding-top: 0;
padding-bottom: 30px;
font-size: 40px;

@media screen and (max-width: 768px) {
    padding-bottom: 65px;
}
`

export const SocialIcon = styled.div`
max-width: 540px;
padding: 10px;
display: inline-block;
flex: 1;
}
`