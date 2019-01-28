import React, { Component } from 'react'
import './SearchInput.css'

export default function SearchInput (props) {
  return (
    <div id='search'>
      <input 
        data-testid='search-input'
        onKeyUp={props.eventHandler}
        onChange={props.inputChange}
        type="text"
        placeholder='Search GH User'
        value={props.inputVal}>
      </input> 
      <p>press enter</p>
    </div>
  )
}