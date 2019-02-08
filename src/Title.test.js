import React from 'react'
import { render, cleanup, waitForElement, getByTestId } from 'react-testing-library'
import Title from './Title'



test('<Title /> ', () => {

  const user = {
    title: 'some title',
    url: 'http://something.com',
    location: 'where ever',
    bio: 'a short bio here',
    repos: '10',
    followers: '10',
    following: '10',
  }

  const { getByTestId } = render(<Title {...user}/>)

  expect(getByTestId('name').tagName).toBe('H1')
  expect(getByTestId('name').textContent).toBe(user.title)
  
  expect(getByTestId('github-url').tagName).toBe('A')
  expect(getByTestId('github-url')).toHaveAttribute('HREF', user.url)
  
  expect(getByTestId('bio').tagName).toBe('P')
  expect(getByTestId('bio').textContent).toBe(user.bio)

  expect(getByTestId('repos').tagName).toBe('P')
  expect(getByTestId('repos').textContent).toBe(`Repos: ${user.repos}`)

  expect(getByTestId('followers').tagName).toBe('P')
  expect(getByTestId('followers').textContent).toBe(`Followers: ${user.followers}`)
  
  expect(getByTestId('following').tagName).toBe('P')
  expect(getByTestId('following').textContent).toBe(`Following: ${user.following}`)

})