import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements';

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
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
