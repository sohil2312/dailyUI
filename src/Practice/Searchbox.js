import React, { useState } from 'react'

const Searchbox = () => {
    const [text, setText] = useState('')
    const [content, setContent] = useState('')
    const options = [
        {key:'sohil',value:'memon'},
        {key:'omer',value:'farhin'},
        {key:'jilani',value:'pathan'},
        {key:'ramiz',value:'saddam'},
        {key:'tanmay',value:'hardik'},
        {key:'faizan',value:'adil'}
    ]
    const onChange = (e)=>{
        e.preventDefault();
        setText(e.target.value)
        
    }
    
    const onClick = (e) =>{
        e.preventDefault();
      options.map((element)=>{
        if(element.value === text){
            setContent(element);
        }
      })
        setText('')
        console.log(content)
    }
    
  return (
    <div className='container flex h-screen items-center justify-center'>
    <form>
    <div className="form-group">
      <label className="label" for="username" >What are you searching</label>
      <input className="input" type="text" id="username" name="username" onChange={onChange} value={text}/>
    </div>
    
    <button className="button items-center" type="submit" onClick={onClick}>Search</button>
    <div class="bg-white rounded-lg shadow-lg p-4 w-full max-w-lg">
  <h2 class="text-xl font-medium mb-2">Search Results</h2>
  <ul>
    <li class="py-2">
      <h1  class="text-blue-500 hover:underline">First Name: {content.value}</h1>
      <p class="text-gray-500">Second Name : {content.key}</p>
    </li>
    
  </ul>
</div>
  </form>
  
  </div>
  )
}

export default Searchbox