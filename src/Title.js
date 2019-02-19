import React from 'react'

export default function Title(props) {
  return (
    <div className='title'>
      <a data-testid='github-url' href={props.url} target='_blank'> 
        <h1 data-testid='name'>{props.title}</h1>
      </a>
      <p data-testid='bio'>{props.bio}</p>
      <p>{props.location}</p>
      <div className='social'>
        <p data-testid='repos'>Repos: {props.public_repos}</p> 
        <p data-testid='followers'>Followers: {props.followers}</p> 
        <p data-testid='following'>Following: {props.following}</p> 
      </div>
    </div>
  )
}
