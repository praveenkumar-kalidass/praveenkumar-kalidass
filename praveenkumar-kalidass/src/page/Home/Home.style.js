import styled from 'styled-components';

import { COLOR } from '../../constant';

export const HomeContainer = styled.div`
  display: flex;
  max-height: 100vh;
  min-height: 100vh;
`;

export const LeftContainer = styled.div`
  background-color: ${COLOR.PRIMARY};
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 5vh 0;
`;

export const RightContainer = styled.div`
  flex: 1;
`;

export const TitleContainer = styled.div`
  margin: 0 4vw;
`;

export const TitleName = styled.text`
  color: ${COLOR.SECONDARY};
  font-size: 24px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Greetings = styled.text`
  color: ${COLOR.WHITE};
  font-size: 30px;
  margin-left: 5px;
`;

export const FirstName = styled.text`
  color: ${COLOR.SECONDARY};
  font-size: 96px;
`;

export const LastName = styled.text`
  color: ${COLOR.SECONDARY};
  font-size: 96px;
`;

export const Designation = styled.text`
  color: ${COLOR.WHITE};
  font-size: 16px;
  margin-left: 5px;
`;
