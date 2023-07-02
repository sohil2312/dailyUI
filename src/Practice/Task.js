import React from "react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { RiEditBoxFill } from "react-icons/ri";




const Task = ({index,element,onCheck,editChange,onDelete}) => {
console.log(index)
const [isEditing, setIsEditing] = useState(false)
  return (
    <div className="card h-12" key={index}>
    <div className="card-body flex items-center justify-around m-2 border-gray-600 border">
      <input
        className="form-check-input"
        type="checkbox"
        name="languages"
        value={element}
        id="flexCheckDefault"
        onChange={onCheck}
        checked={false}
      />
      <h5>{element}</h5>
      <div className="flex" style={{ cursor: "pointer" }}>
        <AiOutlineDelete
          onClick={() => {
            onDelete(element);
          }}
        />
        <RiEditBoxFill
          onClick={setIsEditing(!isEditing)}
          checked={false}
          values={element}
        />
      </div>
    </div>
  </div>
  );
};

export default Task;
