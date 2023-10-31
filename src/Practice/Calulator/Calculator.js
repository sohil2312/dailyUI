import React, { useState } from "react";
import Button from "./Button";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(0);

  const symbols = [
    1,
    2,
    3,
    "+",
    4,
    5,
    6,
    "-",
    7,
    8,
    9,
    "*",
    0,
    "=",
    "DEL",
    "/",
  ];
  const digitRegex = /[0-9]/;
  const handleButtonClick = (arg) => {
    if (digitRegex.test(arg)) {
    
      setDisplayValue(displayValue ===0 ?String(arg): String(displayValue) + String(arg));
    }else if(arg === '='){
      setDisplayValue(eval(displayValue))
     
    }else if(arg === 'DEL'){
      setDisplayValue(0)
     
    }else{
      setDisplayValue(displayValue+arg)
    }
    console.log(displayValue);
  };
  const renderedButtons = symbols.map((element) => (
    <Button text={element} handleButtonClick={handleButtonClick} />
  ));
  return (
    <>
      <div class="calculator">
        <div class="display">
          {displayValue}
        </div>
        <div class="bodyCalculator">{renderedButtons}</div>
      
      </div>
    </>
  );
};

export default Calculator;
