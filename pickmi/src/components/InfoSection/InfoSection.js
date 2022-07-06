import React from "react";
import { InfoSec } from "./InfoSectionelements";
import { Container } from "./InfoSectionelements";

const InfoSection = ({lightBg}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                h
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    ) 
}

export default InfoSection