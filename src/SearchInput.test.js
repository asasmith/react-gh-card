import React from 'react'
import { render, getByTestId } from 'react-testing-library'
import SearchInput from './SearchInput'

test('<SearchInput />', () => {
  const { debug, getByTestId } = render(<SearchInput />)
  const searchInput = getByTestId('search-input')

  debug()

  expect(searchInput.tagName).toBe('INPUT')
  expect(searchInput.placeholder).toBe('Search GH User')
})