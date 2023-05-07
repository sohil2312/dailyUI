import React from 'react'
import bird from '../svg/bird.svg'
import cow from '../svg/cow.svg'
import horse from '../svg/horse.svg'
import cat from '../svg/cat.svg'
import dog from '../svg/dog.svg'
import gator from '../svg/gator.svg'
import heart from '../svg/heart.svg'


const Animalshow = ({type}) => {
    const svgAnimals = {
        bird,cow,horse,cat,dog,gator,heart
    }
  return (
    
        <div className="col">
    <div className="card" style={{width: '3rem'}}>
    <img src={svgAnimals[type]} class="card-img-top" alt="..."/>
    </div>
  </div>
  
  )
}

export default Animalshow