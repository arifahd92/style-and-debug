import React from 'react';

import './Button.css';

const Button = props => {
  let customClass = ""
  if (props.valid) {
    customClass = "invalid"
  }
  else {
    customClass = ""
  }
  return (
    <button type={props.type} className={`button ${customClass}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
