import Warning from '../ui/Warning'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('Rendering Warning', () => {
  jest.mock('dompurify')

  it('renders without crashing', () => {
    render(<Warning message="Hello" />)

    const element = screen.getByRole('alert')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('Hello')
  })

  it('renders with callback function', async () => {
    const mockFunction = jest.fn()
    render(<Warning message="Low battery" onClose={mockFunction} />)

    const element = screen.getByRole('alert')
    const button = screen.getByRole('button')

    expect(element).toBeInTheDocument()

    await userEvent.click(button)

    expect(mockFunction).toHaveBeenCalledTimes(1)
  })

  it('renders with custom className', () => {
    render(<Warning message="No items" className="test--class" />)
    const element = screen.getByRole('alert')

    //Check that there is at least 1 element with the desired className
    expect(element.getElementsByClassName('test--class').length).toBe(1)
  })

  it('is safe rendering of messages containing HTML elements', () => {
    render(<Warning message="<h1>I should be plain text</h1>" />)

    // Check that the plain text (sanitized) is rendered
    expect(screen.getByText('I should be plain text')).toBeInTheDocument()

    // Check that the literal HTML string is NOT rendered
    expect(
      screen.queryByText('<h1>I should be plain text</h1>')
    ).not.toBeInTheDocument()
  })

  it('does not render with empty strings', () => {
    expect(() => render(<Warning message=" " />)).toThrow(/empty/)
  })
})
