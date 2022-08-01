import React from "react";
import { 
    ContactContainer,
    EmailIcon,
    LinkedinIcon,
    GithubIcon,
    InfoColumn, 
    TitleWrapper, 
    SocialIcon, 
    TextWrapper
 } from "./ContactUsElements";

const ContactUs = () => {  

    return (
        <>
            <ContactContainer>
                <InfoColumn>
                    <TitleWrapper className="font-link">
                        Contact Us
                    </TitleWrapper>
                    <TextWrapper className="font-link2">
                        Natasha Rafaela
                    </TextWrapper>
                    <TextWrapper>
                        <SocialIcon>
                            <a href ="www.google.com"><EmailIcon size={35}/></a>
                        </SocialIcon>
                        <SocialIcon>
                            <a href ={"www.linkedin.com/in/natasharafaela"}><LinkedinIcon size={35}/></a>
                        </SocialIcon>
                        <SocialIcon>
                            <a href ="www.google.com"><GithubIcon size={35}/></a>
                        </SocialIcon>
                    </TextWrapper>
                    <TextWrapper className="font-link2">
                        Veronica Angelin Setiyo
                    </TextWrapper>
                    <TextWrapper>
                        <SocialIcon>
                            <a href ="google.com"><EmailIcon size={35}/></a>
                        </SocialIcon>
                        <SocialIcon>
                            <a href ="google.com"><LinkedinIcon size={35}/></a>
                        </SocialIcon>
                        <SocialIcon>
                            <a href ="google.com"><GithubIcon size={35}/></a>
                        </SocialIcon>
                    </TextWrapper>
                </InfoColumn>
            </ContactContainer>
        </>
    ) 
}

export default ContactUs