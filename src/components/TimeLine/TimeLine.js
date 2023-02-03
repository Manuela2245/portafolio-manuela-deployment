import React, { useState, useRef, useEffect } from 'react';
import {DivImageName,ImgDivImageName,Box, Boxes, BoxNum, BoxText} from "./TimeLineStyles"
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider/>
      <br/>
      <SectionTitle>About me</SectionTitle>
      <DivImageName>
      <SectionText style={{gridRow:"1/3",gridColumn:"1/2", color:"white", fontSize:"17px"}}>I am Manuela Álvarez Cañas a  Designer Engineer who loves front-end development and UX-UI design. My core skills and experience lie in the design and implementation of web applications using React, JavaScript, and CSS. Additionally, I possess proficiency in industry-standard design tools such as Figma, Adobe Illustrator, and Photoshop. I am an enthusiastic individual who enjoys continuously expanding my knowledge and skills in the software engineering and design field. I am also self-motivated and actively seek out new and challenging opportunities to advance my skills and grow professionally. </SectionText>
      <img src='/images/yo.jpg' style={{maxHeight:"100$", maxWidth:"100%", gridColumn:"2/3"}}></img> 
      </DivImageName>
      <Boxes>
        <Box style={{backgroundColor:"#A5F5C8"}}>
          <BoxNum>Creative</BoxNum>
        </Box>
        <Box style={{backgroundColor:"#B3BCF2"}}>
        <BoxNum>Teamwork-skills</BoxNum>
        </Box>
        <Box style={{backgroundColor:"#A5F5C8"}}>
        <BoxNum>Self-learner</BoxNum>
        </Box>
        <Box style={{backgroundColor:"#B3BCF2"}}>
        <BoxNum>Disciplined</BoxNum>
        </Box>
      </Boxes>
      <SectionDivider/>
    </Section>
  );
};

export default Timeline;
