import Warning from '../ui/Warning'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' // if not in setup file

describe('Warning', () => {
  it('renders Warning component with correct message', () => {
    render(<Warning message="Hello" />)

    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent('Hello')
  })
})
