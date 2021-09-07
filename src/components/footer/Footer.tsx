import React from 'react';
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import {
  FooterContainer,
  FooterLeftSection,
  FooterRightSection,
  FooterWrapper,
  SNSLink,
} from './FooterStyle';
import { ReactComponent as FooterTag } from '../../assets/svg/Footer.svg';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLeftSection>
          <FooterTag />
        </FooterLeftSection>
        <FooterRightSection>
          <SNSLink href="https://www.instagram.com/char_smine/">
            <AiOutlineInstagram size={35} color="#919191" />
          </SNSLink>
          <SNSLink href="https://github.com/Virtuso1225">
            <AiOutlineGithub size={35} color="#919191" />
          </SNSLink>
          <SNSLink href="mailto: dominico1225@gmail.com">
            <SiGmail size={35} color="#919191" />
          </SNSLink>
        </FooterRightSection>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
