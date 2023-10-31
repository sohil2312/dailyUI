import React, { useState } from 'react';

const Button = ({ handleButtonClick, text }) => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = () => {
    handleButtonClick(text);
    setClickedButton(text);
  };

 
  return (
    <div>
      <button className='numbers'
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;


