import React from 'react';
import { DiFirebase, DiJavascript, DiPython, DiReact, DiZend, DiCss3,DiHtml5} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle,ListIconImage } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I have learned many tools in the world of design and web development:
    </SectionText>
    <List>
    <ListItem>
        <ListIconImage>
       
        </ListIconImage>
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
              Experience with: <br/>
              JavaScript <br/>
              Python
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListIconImage>
          
        </ListIconImage>
        <br/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
              Experience with: <br/>
              React.js <br/>
              Css <br/>
              Html
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListIconImage>
          
        </ListIconImage>
        <ListContainer>
          <ListTitle>UI-UX</ListTitle>
          <ListParagraph>
              Experience with tools like: <br/>
              Figma<br/>
              Keyshot <br/>
              Adobe illustrator <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
