import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  width: 1194px;
  height: 60px;
  border-radius: 36px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  box-shadow: 41px 41px 55px #d3dae2, -10px -10px 20px #f7ffff;
`;

export const HeaderTitle = styled.div`
  font-size: 28px;
  color: #919191;
  font-family: 'SCDreamBold';
  margin-left: 50px;
  :hover {
    color: #1d1d1d;
    transition: 1s;
  }
`;
