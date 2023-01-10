import React from "react";
import { Container } from "./InfoSectionelements";
import { InfoSec, InfoRow, InfoColumn, TitleWrapper, SocialIcon, TextWrapper, Bg, BgImage } from "./InfoSectionelements";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import homebg from '../../images/home_background.png';

const InfoSection = () => {

    return (
        <>
            <InfoSec>
                <Container>
                    <Bg>
                       <BgImage src={homebg}/> 
                    </Bg>
                    <InfoRow>
                        <InfoColumn>
                            <TitleWrapper className="font-link">
                                Contact Us
                            </TitleWrapper>
                            <TextWrapper className="font-link2">
                                Natasha Rafaela
                            </TextWrapper>
                            <TextWrapper>
                                <SocialIcon>
                                    <a href ="www.google.com"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                                </SocialIcon>
                                <SocialIcon>
                                    <a href ="www.google.com"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                                </SocialIcon>
                                <SocialIcon>
                                    <a href ="www.google.com"><i class="fa fa-github" aria-hidden="true"></i></a>
                                </SocialIcon>
                            </TextWrapper>
                            <TextWrapper className="font-link2">
                                Veronica Angelin Setiyo
                            </TextWrapper>
                            <TextWrapper>
                                <SocialIcon>
                                    <a href ="google.com"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                                </SocialIcon>
                                <SocialIcon>
                                    <a href ="google.com"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                                </SocialIcon>
                                <SocialIcon>
                                    <a href ="google.com"><i class="fa fa-github" aria-hidden="true"></i></a>
                                </SocialIcon>
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    ) 
}

export default InfoSection