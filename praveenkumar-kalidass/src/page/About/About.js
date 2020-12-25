import React from 'react';
import { TEXT } from '../../constant';

import { AboutContainer, AboutTitle, Description, SocialLinks, LinkIcon } from './About.style';

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>{TEXT.ABOUT_ME}</AboutTitle>
      <Description>{TEXT.DESCRIPTION}</Description>
      <SocialLinks>
        <LinkIcon target="_blank" className="icon-twitter" href="https://twitter.com/mrpravin94" />
        <LinkIcon target="_blank" className="icon-linkedin" href="https://www.linkedin.com/in/praveenkumar-kalidass/" />
        <LinkIcon target="_blank" className="icon-github" href="https://github.com/praveenkumar-kalidass" />
        <LinkIcon target="_blank" className="icon-facebook" href="https://facebook.com/Praveen261994" />
        <LinkIcon target="_blank" className="icon-stackexchange" href="https://stackoverflow.com/users/7526877/praveenkumar-kalidass" />
      </SocialLinks>
    </AboutContainer>
  );
};

export default About;