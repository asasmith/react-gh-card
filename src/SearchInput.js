import React, { Component } from 'react'
import './SearchInput.css'

// class SearchInput extends Component {
//   constructor(props) {
//     super(props)
//   }

const SearchInput = (props) => {
  return (
    <div id='search'>
      <input onKeyUp={props.eventHandler}  type="text" placeholder='Search GH User'></input> 
      <p>press enter</p>
    </div>
  )
}
export default SearchInput