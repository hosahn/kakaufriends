import React from 'react';
import { CustomButton } from '../styles/BtnStyle';

const Btn = ({ text, type, onClick, disabled }) => {
  const btnType = ['main', 'sub'].includes(type) ? type : 'main';

  return (
    <CustomButton type={btnType} onClick={onClick} disabled={disabled}>
      {text}
    </CustomButton>
  );
};

Btn.defaultProps = {
  type: 'default',
};

export default Btn;
