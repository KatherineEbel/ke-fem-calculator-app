import { render, screen } from '@testing-library/react'
import CalculatorPage from 'pages'
import userEvent from '@testing-library/user-event'

describe('Calculator', () => {
  let display: HTMLElement

  beforeEach(() => {
    render(<CalculatorPage />)
    display = screen.getByLabelText(/display/i)
  })

  it(`renders a display label`, async () => {
    expect(display).toBeInTheDocument()
  })

  it(`displays 9 when 9 button selected`, async () => {
    const nine = screen.getByRole('button', { name: '9' })
    userEvent.click(nine)
    expect(display).toHaveValue('9')
  })

  it(`displays 45 when 4 and 5 buttons selected`, async () => {
    userEvent.click(screen.getByRole('button', { name: '4' }))
    userEvent.click(screen.getByRole('button', { name: '5' }))
    expect(display).toHaveValue('45')
  })

  it(`doesn't display operators when selected`, async () => {
    const plus = screen.getByRole('button', { name: '+' })
    userEvent.click(plus)
    expect(display).toHaveValue('0')
  })

  it(`displays 7 for key presses 3 + 4 =`, async () => {
    userEvent.click(screen.getByRole('button', { name: '3' }))
    userEvent.click(screen.getByRole('button', { name: '+' }))
    userEvent.click(screen.getByRole('button', { name: '4' }))
    userEvent.click(screen.getByRole('button', { name: '=' }))
    expect(display).toHaveValue('7')
  })

  it(`adds decimal to number in display`, async () => {
    userEvent.click(screen.getByRole('button', { name: '1' }))
    userEvent.click(screen.getByRole('button', { name: '.' }))
    expect(display).toHaveValue('1.')
  })

  it(`displays 12 for 18 - 6`, async () => {
    userEvent.click(screen.getByRole('button', { name: '1' }))
    userEvent.click(screen.getByRole('button', { name: '8' }))
    userEvent.click(screen.getByRole('button', { name: '-' }))
    userEvent.click(screen.getByRole('button', { name: '6' }))
    userEvent.click(screen.getByRole('button', { name: '=' }))
    expect(display).toHaveValue('12')
  })

  it(`displays 36 for 12 * 3`, async () => {
    userEvent.click(screen.getByRole('button', { name: '1' }))
    userEvent.click(screen.getByRole('button', { name: '2' }))
    userEvent.click(screen.getByRole('button', { name: 'x' }))
    userEvent.click(screen.getByRole('button', { name: '3' }))
    userEvent.click(screen.getByRole('button', { name: '=' }))
    expect(display).toHaveValue('36')
  })

  it(`displays 9 for 45 / 5`, async () => {
    userEvent.click(screen.getByRole('button', { name: '4' }))
    userEvent.click(screen.getByRole('button', { name: '5' }))
    userEvent.click(screen.getByRole('button', { name: '/' }))
    userEvent.click(screen.getByRole('button', { name: '5' }))
    userEvent.click(screen.getByRole('button', { name: '=' }))
    expect(display).toHaveValue('9')
  })

  it(`resets display when reset clicked`, async () => {
    userEvent.click(screen.getByRole('button', { name: '4' }))
    userEvent.click(screen.getByRole('button', { name: '0' }))
    userEvent.click(screen.getByRole('button', { name: '6' }))
    userEvent.click(screen.getByRole('button', { name: /reset/i }))
    expect(display).toHaveValue('0')
  })

  it(`displays 4 when 45 del pressed`, async () => {
    userEvent.click(screen.getByRole('button', { name: '4' }))
    userEvent.click(screen.getByRole('button', { name: '5' }))
    userEvent.click(screen.getByRole('button', { name: /del/i }))
    expect(display).toHaveValue('4')
  })

  it(`displays 0 when del pressed`, async () => {
    userEvent.click(screen.getByRole('button', { name: /del/i }))
    expect(display).toHaveValue('0')
  })
})
