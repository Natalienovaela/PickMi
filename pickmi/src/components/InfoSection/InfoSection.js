import React from "react";
import { Container } from "./InfoSectionelements";
import { InfoSec, InfoRow, InfoColumn, TextWrapper } from "./InfoSectionelements";

const InfoSection = ({lightBg, imgStart}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                This is where the text goes
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    ) 
}

export default InfoSection