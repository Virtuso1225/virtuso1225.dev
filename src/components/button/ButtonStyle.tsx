import styled from 'styled-components';

interface ButtonProps {
  isClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  border-radius: 20px;
  transition: 0.6s;
  box-shadow: ${(props) =>
    props.isClicked
      ? `inset 3px 3px 6px rgba(0, 0, 0, 0.16),
    6px 6px 12px rgba(204, 202, 202, 0.16);`
      : `6px 6px 12px #c3c9d1,
             -20px -20px 60px #ffffff;`};

  /* :hover {
    box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.16),
      6px 6px 12px rgba(204, 202, 202, 0.16);
  } */
`;

export const ButtonContent = styled.div`
  color: #919191;
  font-family: 'SCDreamRegular';
`;
