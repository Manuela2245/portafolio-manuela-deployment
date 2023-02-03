import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection,NavLink } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center >
      Hello! I´m Manuela <br/>
      Welcome to my portfolio
      </SectionTitle>
      <SectionText> 
        I´m a designer who loves two things UX-UI and front-end development
      </SectionText>
      <br/>
      <Link href="#about">
          <NavLink>Learn more about me</NavLink>
      </Link>
      
    </LeftSection>
  </Section>
);

export default Hero;