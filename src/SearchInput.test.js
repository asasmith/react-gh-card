import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import SearchInput from './SearchInput'

afterEach(cleanup)

const inputChange = jest.fn()

test('<SearchInput />', () => {
  const { debug, getByTestId } = render(<SearchInput inputChange={inputChange} />)
  const searchInput = getByTestId('search-input')

  expect(searchInput.tagName).toBe('INPUT')
  expect(searchInput.placeholder).toBe('Search GH User')
  fireEvent.change(searchInput, {target: {value: 'testing'}})
  expect(searchInput.value).toBe('testing')
  expect(inputChange).toHaveBeenCalledTimes(1)
})