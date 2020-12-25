import styled from 'styled-components';

import { COLOR } from '../../constant';

export const ContactContainer = styled.div`
  display: flex;
  max-height: 100vh;
  min-height: 100vh;
`;

export const LeftContainer = styled.div`
  flex: 1;
`;

export const RightContainer = styled.div`
  background-color: ${COLOR.PRIMARY};
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10vh 0;
`;

export const ContactTitle = styled.text`
  color: ${COLOR.WHITE};
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10vh;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10vw;
`;

export const DescriptionTitle = styled.text`
  color: ${COLOR.WHITE};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const Description = styled.text`
  color: ${COLOR.WHITE};
  font-size: 14px;
  margin-left: 5px;
  margin-bottom: ${({ smallMargin }) => smallMargin ? '10': '20'}px;
`;
