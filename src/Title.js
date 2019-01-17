import React from 'react'

const Title = (props) => {
  return (
    <div className='title'>
      <a href={props.url} target='_blank'> 
        <h1>{props.title}</h1>
      </a>
      <p>{props.bio}</p>
      <p>{props.location}</p>
      <div className='social'>
        <p>Repos: {props.repos}</p> 
        <p>Followers: {props.followers}</p> 
        <p>Following: {props.following}</p> 
      </div>
    </div>
  )
}

export default Title