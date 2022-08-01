import React from "react";
import { 
    ContactContainer,
    InfoColumn, 
    TitleWrapper, 
    TextWrapper
 } from "./AboutUsElements";

const AboutUs = () => {  

    return (
        <>
            <ContactContainer>
                <InfoColumn>
                    <TitleWrapper className="font-link">
                        About Us
                    </TitleWrapper>
                    <TextWrapper className="font-link2">
                        Background
                    </TextWrapper>
                </InfoColumn>
            </ContactContainer>
        </>
    ) 
}

export default AboutUs