import styled from 'styled-components';

import { COLOR } from '../../constant';

export const AboutContainer = styled.div`
  align-items: stretch;
  background-color: ${COLOR.GRAY};
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  min-height: 100vh;
`;

export const AboutTitle = styled.text`
  color: ${COLOR.PRIMARY};
  font-size: 48px;
  font-weight: bold;
  margin: 10vh 0;
  text-align: center;
`;

export const Description = styled.text`
  font-size: 14px;
  letter-spacing: 5px;
  line-height: 24px;
  margin: 2vh 25vw;
  text-align: center;
  @media(max-width: 768px) {
    margin: 2vh 10vw;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 4vh 30vw;
  @media(max-width: 768px) {
    margin: 2vh 10vw;
  }
`;

export const LinkIcon = styled.a`
  color: ${COLOR.PRIMARY};
  cursor: pointer;
  font-size: 48px;
`;
