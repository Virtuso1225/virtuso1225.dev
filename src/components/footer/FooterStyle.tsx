import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  width: 1194px;
  height: 200px;
  background-color: #e5edf6;
  border: 10px solid #e5edf6;
  border-radius: 37px;
  box-shadow: inset 6px 6px 12px rgba(0, 0, 0, 0.16),
    10px 10px 20px rgba(204, 202, 202, 0.16);
`;

export const FooterLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
`;

export const FooterRightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;

export const SNSLink = styled.a`
  display: flex;
  justify-content: space-around;
  width: 100px;
  svg {
    :visited {
      color: #919191;
    }
    :hover {
      fill: #1d1d1d;
      transition: 0.5s;
    }
  }
`;
