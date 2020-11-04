import React from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import './FormInput.css';

function FormInput() {
  return (
    <div className='formInput'>
      <input
        className='formInput__input'
        placeholder='Write down a task!'
        autoFocus
      />
      <CheckCircleOutlineIcon />
    </div>
  );
}

export default FormInput;
