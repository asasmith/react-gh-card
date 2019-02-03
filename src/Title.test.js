import React from 'react'
import { render, cleanup, waitForElement } from 'react-testing-library'
import Title from './Title'

global.fetch = require('jest-fetch-mock')

afterEach(() => {
  cleanup()
  console.error.mockClear() // what is this?
})

console.error = jest.fn()

test('<Title /> ', async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      user: {
        name: 'testing mockResponse',
      }
    })
  )

  const { debug, getByText } = render(<Title title={name}/>)

  await waitForElement(() => getByText('testing mockResponse'))
  debug()
})