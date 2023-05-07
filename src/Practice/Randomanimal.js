import React, { useState } from 'react'

import Animalshow from './Animalshow'
const animalGenerator = () =>{
    const animal = ['dog','bird','cat','cow','gator','horse'];
    const randomAnimal = animal[Math.floor(Math.random()*animal.length)]
    return randomAnimal;
   
}
const Randomanimal = () => {
    const [animal, setAnimal] = useState([])
    const generateRandomAnimal = () =>{
        setAnimal([...animal,animalGenerator()])
       
    }
    const newAnimal = animal.map((animal,index) =>{
        return <Animalshow key={index} type={animal}/>;
    })
    
  return (
    <div className='container my-3'>
        <button type="button" className="btn btn-primary" onClick={generateRandomAnimal}>Random Animal</button>
        <img ></img>
        <div className="row row-cols-1 row-cols-md-3 g-4 animal-list">{newAnimal}</div>
    </div>
    
 
  )
  
}

export default Randomanimal