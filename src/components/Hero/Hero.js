import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Hi, Im Kristaps <br/>
          Full Stack Developer  
      </SectionTitle>
      <SectionText>
        I am a developer with 4 years of experience developing websites and web applications using different languages and technologies.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;