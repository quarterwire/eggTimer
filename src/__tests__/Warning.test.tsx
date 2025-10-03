import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Warning from '../ui/Warning'

describe('<Warning />', () => {
  it('renders the passed message', () => {
    const callback = jest.fn()
    render(<Warning message="Hello" onClose={callback} />)

    const element = screen.getByRole('alert')
    expect(element).toHaveTextContent('Hello')

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(callback).toHaveBeenCalledTimes(1)
  })
})
