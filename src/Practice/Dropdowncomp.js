import React from 'react'
import Dropdown from './Dropdown'

const Dropdowncomp = () => {
  const options =[
    {label:'red',value:'red'},
    {label:'blue',value:'blue'},
    {label:'yellow',value:'yellow'},
    {label:'green',value:'green'}
  ]
  return (
    <>
    <Dropdown options={options}/>
    <Dropdown options={options}/>
    
    </>
  )
}

export default Dropdowncomp