import { FormEventHandler, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import CalculatorKey from '../components/CalculatorKey'
import { calculatorKeys, KeyKind, OperatorKind } from '../lib/keys'
import { format } from '../lib/utils'
import { useTheme } from 'next-themes'

const CalculatorPage: NextPage = () => {
  const [memory, setMemory] = useState<string>()
  const [display, setDisplay] = useState('0')
  const [operator, setOperator] = useState<OperatorKind>()
  const { theme } = useTheme()

  const handleInput = (kind: KeyKind, value: string | OperatorKind) => {
    switch (kind) {
      case 'operator':
        setOperator(value as OperatorKind)
        if (memory !== undefined) {
          evaluate()
        } else {
          setMemory(display)
        }
        return
      case 'digit':
        if (memory === undefined) {
          setDisplay(display.replace(/^0/, '') + value)
          break
        } else {
          if (operator) {
            if (memory === display) {
              setMemory(display)
              setDisplay(value)
            } else {
              setDisplay(display + value)
            }
            break
          }
          setDisplay(value)
        }
        break
      case 'decimal':
        if (!display.includes('.')) {
          setDisplay(display + '.')
        }
        break
      case 'delete':
        if (display === '0') break
        setDisplay(display.substr(0, display.length - 1))
        break
      default:
        setDisplay('Error')
    }
  }

  const evaluate = () => {
    if (!memory || !operator) {
      return
    }
    const op1 = parseFloat(memory.replace(',', '') || '0')
    const op2 = parseFloat(display.replace(',', ''))
    let result: string
    switch (operator) {
      case '+':
        result = `${op1 + op2}`
        break
      case '-':
        result = `${op1 - op2}`
        break
      case 'x':
        result = `${op1 * op2}`
        break
      case '/':
        result = `${op1 / op2}`
        break
      default:
        result = 'Error'
    }
    setDisplay(result)
    setMemory(result)
  }

  const reset: FormEventHandler = (e) => {
    e.preventDefault()
    setDisplay('0')
    setMemory(undefined)
    setOperator(undefined)
  }

  useEffect(() => {
    const newDisplay = display.endsWith('.') ? display : format(display)
    setDisplay(newDisplay)
  }, [display])

  useEffect(() => {
    console.log({ display }, { operator }, { memory })
  }, [display, operator, memory])

  return (
    <div className="grid gap-6">
      <form
        className="grid gap-6 w-full"
        onSubmit={(e) => {
          e.preventDefault()
          evaluate()
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
              className="display bg-screen border-none rounded text-right w-full text-2xl px-6 py-7"
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
          <ul className="grid grid-cols-4 grid-rows-5 gap-3.5 p-6 rounded list-none">
            {calculatorKeys.map((k, i) => (
              <li key={i} className="w-full">
                <CalculatorKey config={k} onClick={handleInput} />
              </li>
            ))}
            <li className="row-start-5 col-span-2">
              <input className="btn btn-accent" type="reset" />
            </li>
            <li className="row-start-5 col-start-3 col-span-full p-1">
              <input
                className={`btn btn-primary equals ${
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
