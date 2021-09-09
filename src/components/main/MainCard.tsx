import React, { useState } from 'react';
import Button from '../button/Button';
import {
  MainCardContianer,
  MainCardWrapper,
  MainLeftSection,
} from './MainCardStyle';

interface ButtonStateProp {
  isClicked: boolean;
}

const MainCard: React.FC = () => {
  const [butttonState, setButtonState] = useState<ButtonStateProp>({
    isClicked: false,
  });

  const onClickHandle = (): void => {
    setButtonState({ isClicked: !butttonState.isClicked });
  };

  return (
    <MainCardContianer>
      <MainCardWrapper>
        <MainLeftSection>
          <Button
            text="content"
            isClicked={butttonState.isClicked}
            onClick={onClickHandle}
          />
        </MainLeftSection>
      </MainCardWrapper>
    </MainCardContianer>
  );
};

export default MainCard;
