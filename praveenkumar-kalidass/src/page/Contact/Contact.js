import React from 'react';

import { TEXT } from '../../constant';
import {
  ContactContainer,
  ContactTitle,
  LeftContainer,
  RightContainer,
  ContactDetails,
  DescriptionTitle,
  Description,
} from './Contact.style';

const Contact = () => {
  return (
    <ContactContainer>
      <LeftContainer />
      <RightContainer>
        <ContactDetails>
          <ContactTitle>{TEXT.CONTACT}</ContactTitle>
          <DescriptionTitle>{TEXT.EMAIL}</DescriptionTitle>
          <Description>{TEXT.PRAVEEN_EMAIL}</Description>
          <DescriptionTitle>{TEXT.PHONE}</DescriptionTitle>
          <Description>{TEXT.PRAVEEN_PHONE}</Description>
          <DescriptionTitle>{TEXT.PERMANENT_ADDRESS}</DescriptionTitle>
          <Description smallMargin>{TEXT.PERMANENT_ADDRESS_LINE_1}</Description>
          <Description>{TEXT.PERMANENT_ADDRESS_LINE_2}</Description>
          <DescriptionTitle>{TEXT.CURRENT_ADDRESS}</DescriptionTitle>
          <Description smallMargin>{TEXT.CURRENT_ADDRESS_LINE_1}</Description>
          <Description>{TEXT.CURRENT_ADDRESS_LINE_2}</Description>
        </ContactDetails>
      </RightContainer>
    </ContactContainer>
  );
};

export default Contact;
