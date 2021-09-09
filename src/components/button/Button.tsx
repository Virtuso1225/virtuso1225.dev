import React from 'react';
import { ButtonContent, ButtonWrapper } from './ButtonStyle';

interface ButtonProps {
  text: string;
  isClicked: boolean;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = (props) => {
  const { text, isClicked, onClick } = props;
  return (
    <ButtonWrapper isClicked={isClicked} onClick={onClick}>
      <ButtonContent>{text}</ButtonContent>
    </ButtonWrapper>
  );
};

export default Button;
