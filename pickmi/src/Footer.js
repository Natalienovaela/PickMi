import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterCopyrightItem, FooterCopyrightContainer} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkTitle>This is a footer</FooterLinkTitle>
            <FooterLinkItems>
              <FooterLink to="/">PickMi</FooterLink>
              <FooterLink to="/">About</FooterLink>
              <FooterLink to="/">How PickMi works</FooterLink>
              <FooterLink to="/">Contact Us</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <FooterCopyrightContainer>
          <FooterCopyrightItem>Copyright (c) 2022 Natasha Rafaela and Veronica Angelin</FooterCopyrightItem>
          <FooterCopyrightItem>made using ReactApp</FooterCopyrightItem>
        </FooterCopyrightContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
