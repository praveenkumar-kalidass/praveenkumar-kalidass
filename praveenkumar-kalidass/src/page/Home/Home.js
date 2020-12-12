import React from 'react';
import { TEXT } from '../../constant';

import {
  HomeContainer,
  LeftContainer,
  RightContainer,
  TitleContainer,
  TitleName,
  ContentContainer,
  Greetings,
  FirstName,
  LastName,
  Content,
  Designation,
} from './Home.style';

const Home = () => {
  return (
    <HomeContainer>
      <LeftContainer>
        <TitleContainer>
          <TitleName>{TEXT.PRAVEENKUMAR} {TEXT.KALIDASS}</TitleName>
        </TitleContainer>
        <ContentContainer>
          <Content>
            <Greetings>{TEXT.HEY}</Greetings>
            <FirstName>{TEXT.PRAVEENKUMAR}</FirstName>
            <LastName>{TEXT.KALIDASS}</LastName>
            <Designation>{TEXT.DESIGNATION}</Designation>
          </Content>
        </ContentContainer>
      </LeftContainer>
      <RightContainer />
    </HomeContainer>
  );
};

export default Home;
