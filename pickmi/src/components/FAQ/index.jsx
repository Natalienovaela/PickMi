import React from "react";
import { 
    ContactContainer,
    InfoColumn, 
    TitleWrapper, 
    TextWrapper
 } from "./FAQElements";

const Faq = () => {  

    return (
        <>
            <ContactContainer>
                <InfoColumn>
                    <TitleWrapper className="font-link">
                        FAQ
                    </TitleWrapper>
                    <TextWrapper className="font-link2">
                        Question goes here
                    </TextWrapper>
                </InfoColumn>
            </ContactContainer>
        </>
    ) 
}

export default Faq