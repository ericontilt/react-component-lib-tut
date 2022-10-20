import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

test('should render button with default props', () => {
  render(<Button label='Hello' />)

  expect(screen.getByRole('button')).toHaveTextContent('Hello')
  expect(screen.getByRole('button')).toHaveClass('storybook-button--secondary')
  expect(screen.getByRole('button')).toHaveClass('storybook-button--medium')
})

test('should invoke click handler', () => {
  // onClick is a mock function that we can use to check if it was called
  const onClick = jest.fn()
  render(<Button label='Hello' onClick={onClick} />)

  userEvent.click(screen.getByRole('button'))

  // check if the mock function was called
  expect(onClick).toHaveBeenCalledTimes(1)
})
