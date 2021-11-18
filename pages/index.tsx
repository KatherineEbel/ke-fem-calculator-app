import { FormEventHandler, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import CalculatorKey from '../components/CalculatorKey'
import {
  calculatorKeys,
  Input,
  isCommand,
  isOperator,
  Operator,
  OperatorKind,
} from '../lib/keys'
import { format } from '../lib/utils'
import { useTheme } from 'next-themes'
import { isDigit } from 'json5/lib/util'

const evaluate = (op1: string, op2: string, operator: Operator) => {
  const firstVal = parseFloat(op1.replace(',', '') || '0')
  const secondVal = parseFloat(op2.replace(',', ''))
  let result: string
  switch (operator) {
    case '+':
      result = `${firstVal + secondVal}`
      break
    case '-':
      result = `${firstVal - secondVal}`
      break
    case 'x':
      result = `${firstVal * secondVal}`
      break
    case '/':
      result = `${firstVal / secondVal}`
      break
    default:
      result = 'Error'
  }
  return result
}

const CalculatorPage: NextPage = () => {
  const [op1, setOp1] = useState<string>()
  const [op2, setOp2] = useState<string>()
  const [display, setDisplay] = useState<string>('0')
  const [operator, setOperator] = useState<OperatorKind>()
  const [prevKey, setPrevKey] = useState<Input>('0')
  const [error, setError] = useState(false)

  const { theme } = useTheme()

  const handleInput = (input: Input) => {
    if (isOperator(input)) {
      setOperator(input)
      setOp1(display)
      if (operator && op1 !== undefined && op2 !== undefined) {
        const result = evaluate(op1, op2, operator)
        setDisplay(result)
        setOp1(result)
      }
      setPrevKey(input)
    }
    if (isDigit(input)) {
      setPrevKey(input)
      if (!op1 || (op2?.length && !isOperator(prevKey))) {
        // replace 0 at front to stop it from flashing briefly in UI
        setDisplay(display.replace(/^0/, '') + input)
      } else if ((operator && !op2?.length) || isOperator(prevKey)) {
        setOp2(input)
        setDisplay(input)
      }
      return
    }
    if (isCommand(input)) {
      setPrevKey(input)
      if (input === '.') {
        if (display.includes(input)) {
          return
        }
        if (operator && !op2?.length) {
          setDisplay('0.')
          return
        }
        setDisplay(display + input)
      }

      if (input === 'del') {
        setDisplay(display.substr(0, display.length - 1))
      }

      if (input === '=') {
        if (!op1 || !operator) return
        let result: string
        if (prevKey === '=') {
          result = evaluate(display, op1, operator)
        } else {
          result = evaluate(op1, display, operator)
          setOp1(display)
        }
        setDisplay(result)
        setOp2(undefined)
      }
    }
  }

  const reset: FormEventHandler = (e) => {
    e.preventDefault()
    setDisplay('0')
    setOp1(undefined)
    setOp2(undefined)
    setOperator(undefined)
    setError(false)
  }

  useEffect(() => {
    if (display === 'Error') {
      setError(true)
      return
    }
    setDisplay(format(display))
  }, [display])

  return (
    <div className="grid gap-6">
      <form
        className="grid gap-6 w-full"
        onSubmit={(e) => {
          e.preventDefault()
          handleInput('=')
        }}
        onReset={reset}
      >
        <section className="bg-screen rounded text-white">
          <h2 className="sr-only">Calculator Display</h2>
          <div>
            <label htmlFor="display" className="sr-only">
              Display
            </label>
            <input
              className={`display bg-screen border-none rounded text-right w-full text-2xl px-6 py-7 ${
                error && display === 'Error' && 'text-key-primary'
              }`}
              id="display"
              type="text"
              readOnly
              aria-readonly
              value={display}
            />
          </div>
        </section>
        <section className="bg-keypad/toggle rounded">
          <h2 className="sr-only">Keypad</h2>
          <ul className="grid grid-cols-4 grid-rows-5 gap-6 p-6 rounded list-none">
            {calculatorKeys.map((k, i) => (
              <li key={i} className="w-full">
                <CalculatorKey input={k} onClick={handleInput} />
              </li>
            ))}
            <li className="row-start-5 col-span-2">
              <input className="btn btn-accent" type="reset" />
            </li>
            <li className="row-start-5 col-start-3 col-span-full">
              <input
                className={`btn btn-primary btn-equals ${
                  theme === '3' ? 'hover:shadow-inner-primary-alt' : ''
                }`}
                type="submit"
                value="="
              />
            </li>
          </ul>
        </section>
      </form>
    </div>
  )
}

export default CalculatorPage
