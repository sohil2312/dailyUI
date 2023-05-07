import React from 'react'

const Imageview = (props) => {
   const {url,height} = props
  return (
    <div className="card mx-2 my-2" style={{width: '20rem',height:'auto'}}>
  <img src={url} className="img-fluid"/>
    <h4></h4>
</div>
  )
}

export default Imageview