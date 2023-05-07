import React, { useContext } from 'react'
import SampleContext from '../Context/Sample';
import SampleContexts from '../Context/SampleContext';


const Sample = () => {
  const {count,incrementCount} = useContext(SampleContext)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}> Add count</button>
      </div>
  )
}

export default Sample