import React, { useState,useEffect,useRef} from 'react'
import { GoChevronDown,GoChevronLeft } from "react-icons/go";



const Dropdown = ({options}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const refDiv = useRef();

  const handleSelect = (option)=>{
    setSelected(option)
    setIsOpen(false)
  }
  const handleClick = () =>{
    setIsOpen(!isOpen)
  }
  const renderedOptions = options.map((option)=>{
    return <div className="hover:bg-red-100 rounded cursor-pointer p-1" key={option.value} onClick={()=>{handleSelect(option)}}>{option.label}</div>
  })
  useEffect(() => {
    const handleOutsideClick = (e)=>{
    if(refDiv.current && !refDiv.current.contains(e.target)){
      setIsOpen(false)
    }
    }
    document.addEventListener('click',handleOutsideClick);
    return () => {
    document.removeEventListener('click',handleOutsideClick)
    }
  }, [refDiv])
  
  
  return (
    <div className="w-48 relative" ref={refDiv}>
      <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}>{selected?.label||'Select one..'}{isOpen?<GoChevronDown/>:<GoChevronLeft/>}</div>
      {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}
    </div>
    
  )
}

export default Dropdown