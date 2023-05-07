import React, { useState } from 'react'
import axios from 'axios'
import Imageview from './Imageview'
import './Imagelis.css'
const Imagelis = (props) => {
    const {images,setNext} = props;
    let imgRslt = []
    if(images.results!==undefined){
         imgRslt = images.results;
         console.log(imgRslt)
    }
  return (
    <div className='row image-list'>
        {
            imgRslt.map((el)=>{
                return <Imageview url={el.urls.small} key={el.id} height={el.height}/>
            })
        }
        <button type="button" class="btn btn-primary" onClick={setNext}>NEXT</button>
<button type="button" class="btn btn-secondary">PREVIOUS</button>
     </div>   
    
  )
}

export default Imagelis