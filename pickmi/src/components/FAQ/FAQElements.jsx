import styled from 'styled-components';


export const ContactContainer = styled.div`
color: #8C46B6;
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px) {
    padding-right: 50px;
    padding-left: 50px;
}
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