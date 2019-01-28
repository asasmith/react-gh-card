import { add } from './HelloWorld'

test('fake test', () => {
  expect(true).toBeTruthy()
})

test('add', () => {
  expect(add(1,2)).toBe(3)
})