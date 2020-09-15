import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Container from '../components/Container/Container'

test('renders button inside container component', () => {
  const { getByRole } = render(<Container />)
  const linkElement = getByRole(/button/i)
  expect(linkElement).toBeInTheDocument()
})

test('there should be a joke in the container when it is loaded', () => {
  const { container } = render(<Container />)
  const linkElements = container.querySelectorAll(".joke-text")
  expect(linkElements.length).toBe(2)
})

test('when the new joke button is clicked, a different joke is displayed', () => {
  const { container } = render(<Container />)
  const firstJokeText = container.querySelectorAll(".joke-text")[0].textContent
  const button = container.querySelector('.new-joke-button')
  fireEvent.click(button)
  const secondJokeText = container.querySelectorAll('.joke-text')[0].textContent
  expect(firstJokeText).not.toEqual(secondJokeText)
})