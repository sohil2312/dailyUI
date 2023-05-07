import React from "react";
import { useState } from "react";
import Task from "./Task";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { FcExpand } from "react-icons/fc";
import { AiOutlineDelete } from "react-icons/ai";
import { RiEditBoxFill } from "react-icons/ri";

const AddTask = (e) => {
  const [tasker, setTasker] = useState('');
  const [task, setTask] = useState([]);
  const [edit, setEdit] = useState(false)
 const [update, setUpdate] = useState([])
  const onChange = (e) => {
    e.preventDefault();
    setTasker(e.target.value);
  };
  const [check, setCheck] = useState('');
  const [cList,setClist]=useState([]);
  const onClick = (e) => {
    if (tasker !== [ ]) {
      setTask([...task, tasker]);
    }
    setTasker([]);
    console.log(task)
  };
  const onCheck = (e) => {
    const {value,checked}=e.target; 
   if(checked){
    setClist([...cList,value])
    const checkTask = task.filter((element,index)=>{ return element !== value})
    setTask(checkTask)
   }else{
    setTask([...task,value])
    const uncTask = cList.filter((element)=>{
      return element !== value;
    })
    setClist(uncTask)

   }
  };
  const onDelete = (el) => {
    const uncTask = cList.filter((element)=>{
      return element !== el;
    })
    const checkTask = task.filter((element,index)=>{ return element !== el})
    setClist(uncTask)
    setTask(checkTask)
  }
  const onEdit = (elem) =>{
    
    setEdit(!edit)
    
  }
   const onUpdate = (e)=>{
    console.log(update)
   }
  
 
  const renderedTask = task.map((element,index) => {
    return (
      <div className="card h-12" key={index}>
        <div className="card-body grid d-flex items-center" >
        <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value={element}
                    id="flexCheckDefault"
                    onChange={onCheck}   
                    checked={false}            
                  />
          {!edit ? <h5>{element}</h5> : <input className="ml-10" value={update} onChange={onUpdate}/>}
          <div className="d-flex ml-72 " style={{cursor: 'pointer'}}>
            <AiOutlineDelete onClick={()=>{onDelete(element)}} />
            <RiEditBoxFill onClick={()=>{onEdit(element)}}/>
      
          </div>
        </div>
      </div>
    );
  });
  const checkedTask = cList.map((element,index) => {
    return (
      <div className="card h-12" key={index}>
        <div className="card-body grid d-flex items-center" >
        <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value={element}
                    id="flexCheckDefault"
                    onChange={onCheck}  
                    checked={true}             
                  />
          <h5 className='line-through' >{element}</h5>
          
          <div className="d-flex ml-72 " style={{cursor: 'pointer'}}>
            <AiOutlineDelete onClick={()=>{onDelete(element)}}/>
            <RiEditBoxFill onClick={onEdit}/>
      
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="text-center ">
      <div className="bg-red-400">
        <h1>My to do list</h1>
      </div>
      <div className="container items-center justify-center flex flex-col">
        <input
          type="text"
          className="border rounded-lg p-2 ml-10 mt-5 w-"
          value={tasker}
          name="title"
          placeholder="Title"
          onChange={onChange}
        />
       
        <button className="ml-5 bg-blue-300 rounded-xl p-2" onClick={onClick}>
          
          Add task
        </button>
      </div>
      <div className="container">{renderedTask}
      {checkedTask}</div>
    </div>
  );
};

export default AddTask;
