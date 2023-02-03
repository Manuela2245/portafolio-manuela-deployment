import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <br/>
      <SectionTitle>Contact me</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+57-315-445-79-55">+57-315-445-79-55</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:malvarezc1@eafit.edu.co">
            malvarezc1@eafit.edu.co
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"Designing with purpose creating impactful experiences"</Slogan>
        </CompanyContainer>
        <SocialContainer>
         <SocialIcons href='https://github.com/Manuela2245'>
          <AiFillGithub size="3rem" style={{color:"#A5F5C8"}}/>
         </SocialIcons>
         <SocialIcons href='https://linkedin.com/in/manuela-alvarez-cañas-ba9358233/'>
          <AiFillLinkedin size="3rem" style={{color:"#A5F5C8"}}/>
         </SocialIcons>
         <SocialIcons href='https://instagram.com/manualvarezc_?igshid=YmMyMTA2M2Y='>
          <AiFillInstagram size="3rem" style={{color:"#A5F5C8"}}/>
         </SocialIcons> 
        </SocialContainer> 
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
