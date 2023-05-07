import React, { useState } from 'react'
import Showmodal from './Showmodal'

const Modalcomp = () => {
    const [isOpen, setIsopen] = useState(false)
    const onClick = ()=>{
        setIsopen(true)
    }
  return (
    <div className="container">
        <button type="button" class="btn btn-danger text-dark" onClick={onClick}>Danger</button>
        {isOpen && <Showmodal/>}
    </div>
  )
}

export default Modalcomp