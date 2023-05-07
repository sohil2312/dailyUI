import axios from 'axios'
import React, { useState } from 'react'
import Imagelis from './Imagelis'


const Searchbar = (props) => {
    const {onChange,onSearch}=props
    
  return (
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"onChange={onChange}/>
      <button className="btn btn-outline-success" type="submit" onClick={onSearch}  name='search'>Search</button>
    </form>
  </div>
</nav>
  )
}

export default Searchbar