import React from 'react';
import { TEXT } from '../../constant';

import { AboutContainer, AboutTitle, Description, SocialLinks, LinkIcon } from './About.style';

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>{TEXT.ABOUT_ME}</AboutTitle>
      <Description>{TEXT.DESCRIPTION}</Description>
      <SocialLinks>
        <LinkIcon className="icon-twitter" />
        <LinkIcon className="icon-linkedin" />
        <LinkIcon className="icon-github" />
        <LinkIcon className="icon-facebook" />
        <LinkIcon className="icon-stackexchange" />
      </SocialLinks>
    </AboutContainer>
  );
};

export default About;