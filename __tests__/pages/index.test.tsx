import { render, screen } from '@testing-library/react'
import CalculatorPage from 'pages'
import userEvent from '@testing-library/user-event'

function input(...keys: string[]) {
  keys.forEach((key) => {
    userEvent.click(screen.getByRole('button', { name: key }))
  })
}

describe('Calculator', () => {
  let display: HTMLElement

  beforeEach(() => {
    render(<CalculatorPage />)
    display = screen.getByLabelText(/display/i)
  })

  it(`display label starts at 0`, async () => {
    expect(display).toHaveValue('0')
  })

  it(`displays 9 when 9 button selected`, async () => {
    input('9')
    expect(display).toHaveValue('9')
  })

  it(`displays 45 when 4 and 5 buttons selected`, async () => {
    input('4', '5')
    expect(display).toHaveValue('45')
  })

  it(`doesn't display operators when selected`, async () => {
    input('+')
    expect(display).toHaveValue('0')
  })

  it(`resets display when reset clicked`, async () => {
    input('4', '0', '6')
    userEvent.click(screen.getByRole('button', { name: /reset/i }))
    expect(display).toHaveValue('0')
  })

  it(`displays 4 when 45 del pressed`, async () => {
    input('4', '5', 'del')
    expect(display).toHaveValue('4')
  })

  it(`displays 0 when del pressed`, async () => {
    input('del')
    expect(display).toHaveValue('0')
  })

  it(`can add 0 + 0`, async () => {
    input('0', '+', '0')
    expect(display).toHaveValue('0')
  })

  it(`displays second op`, async () => {
    input('2', '+', '3')
    expect(display).toHaveValue('3')
  })

  it(`can add 3 + 4`, async () => {
    input('3', '+', '4', '=')
    expect(display).toHaveValue('7')
  })

  it(`can multiply 6 x 8`, async () => {
    input('6', 'x', '8', '=')
    expect(display).toHaveValue('48')
  })

  it(`can divide 24 / 6`, async () => {
    input('2', '4', '/', '6', '=')
    expect(display).toHaveValue('4')
  })

  it(`can subtract 3 from 12`, async () => {
    input('1', '2', '-', '3', '=')
    expect(display).toHaveValue('9')
  })

  it(`displays 36 for 12 * 3`, async () => {
    input('1', '2', 'x', '3', '=')
    expect(display).toHaveValue('36')
  })

  it(`displays number when negative`, async () => {
    input('3', '-', '1', '2', '=')
    expect(display).toHaveValue('-9')
  })

  it(`adds decimal to number in display`, async () => {
    input('1', '.')
    expect(display).toHaveValue('1.')
  })

  it(`can display negative numbers`, async () => {
    input('-', '3', '=')
    expect(display).toHaveValue('-3')
  })

  it(`can calculate decimal numbers`, async () => {
    input('3', '.', '6', '+', '1', '=')
    expect(display).toHaveValue('4.6')
  })

  it(`formats large numbers correctly`, async () => {
    input('3', '0', '0', '0')
    expect(display).toHaveValue('3,000')
  })

  it(`can display numbers with two separators`, async () => {
    input('3', '0', '0', '0', '0', '0', '0')
    expect(display).toHaveValue('3,000,000')
  })

  it(`can add two digit numbers`, async () => {
    input('3', '2', '+', '3', '2', '=')
    expect(display).toHaveValue('64')
  })

  it(`can add 3 + 3`, async () => {
    input('3', '+', '3', '=')
    expect(display).toHaveValue('6')
  })

  it(`displays 5 when 3 + 2 + entered`, async () => {
    input('3', '+', '2', '+')
    expect(display).toHaveValue('5')
  })

  it(`displays 9 when 3 + 6 - entered`, async () => {
    input('3', '+', '6', '-')
    expect(display).toHaveValue('9')
  })

  it(`displays 12 when 3 + 3 + = entered`, async () => {
    input('3', '+', '3', '+', '=')
    expect(display).toHaveValue('12')
  })

  it(`displays 0. if 5 + . entered`, async () => {
    input('5', '+', '.')
    expect(display).toHaveValue('0.')
  })

  it(`displays Error when dividing by zero`, async () => {
    input('8', '/', '0', '=')
    expect(display).toHaveClass('text-key-primary')
    expect(display).toHaveValue('Error')
  })

  it(`displays 4 when 2 + = entered`, async () => {
    input('2', '+', '=')
    expect(display).toHaveValue('4')
  })

  it(`displays 0 when 2 - = entered`, async () => {
    input('2', '-', '=')
    expect(display).toHaveValue('0')
  })

  it(`handles consecutive evaluations`, async () => {
    input('5', '-', '1', '=', '=', '=')
    expect(display).toHaveValue('2')
  })

  it(`handles multiple operations`, async () => {
    input('3', '2', '-', '2', '-', '2')
    expect(display).toHaveValue('2')
  })

  it(`sets display to provided digit after =`, async () => {
    input('3', '+', '3', '=', '5')
    expect(display).toHaveValue('5')
  })

  it(`doesn't do a calculation if operator entered after =`, async () => {
    input('3', '+', '3', '=', 'x')
  })

  it(`re-evaluates memory value when = entered multiple times`, async () => {
    input('3', '+', '3', '=', '=')
    expect(display).toHaveValue('9')
  })
})
