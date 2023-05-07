import { Action } from "@remix-run/router";
import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, store, addValue, changeValue } from "../Store";

function Counter() {
  const dispatch = useDispatch();
  const counts = useSelector((state) => {
    return state.count;
  });
  const valueChange = useSelector((state) => {
    return state.addValue;
  });
  const handleIncrement = () => {
    dispatch(increment())
  };

  const handleDecrement = () => {
    dispatch(decrement())
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
      dispatch(changeValue(value))
    
  };

  const handleAdd = (valueChange) => {
    dispatch(addValue(valueChange))
  };

  return (
    <div className="container flex my-10 mx-10">
      <div className="counter-container">
        <button onClick={handleDecrement} className="btn btn-danger">
          -
        </button>
        <span>{counts}</span>
        <button onClick={handleIncrement} className="btn btn-primary">
          +
        </button>
      </div>
      <div className="input-container">
        <input
          type="number"
          value={valueChange}
          onChange={handleInputChange}
          placeholder="Add to Count"
          className="border-red-700 border-2 rounded-2xl mx-3 text-center"
        />
        <button onClick={()=> handleAdd(valueChange)} className="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
}

export default Counter;
