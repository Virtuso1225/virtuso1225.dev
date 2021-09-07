import React from 'react';
import { HeaderContainer, HeaderTitle, HeaderWrapper } from './HeaderStyle';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderTitle>VIRTUSO.DEV</HeaderTitle>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
