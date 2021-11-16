import { FormEventHandler, useState } from 'react'
import type { NextPage } from 'next'
import CalculatorKey from '../components/CalculatorKey'
import { calculatorKeys, KeyKind, OperatorKind } from '../lib/keys'

const CalculatorPage: NextPage = () => {
  const [memory, setMemory] = useState<string>()
  const [display, setDisplay] = useState('0')
  const [operator, setOperator] = useState<OperatorKind>()

  const handleInput = (kind: KeyKind, value: string | OperatorKind) => {
    switch (kind) {
      case 'operator':
        setMemory(display)
        setOperator(value as OperatorKind)
        return
      case 'digit':
        if (!memory) {
          setDisplay(display.replace(/^0/, '') + value)
        } else {
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
        throw new Error(`unsupported keyKind ${kind}`)
    }
  }

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    if (!memory || !operator) {
      return
    }
    const op1 = parseFloat(memory || '0')
    const op2 = parseFloat(display)
    switch (operator) {
      case '+':
        setDisplay(`${op1 + op2}`)
        break
      case '-':
        setDisplay(`${op1 - op2}`)
        break
      case 'x':
        setDisplay(`${op1 * op2}`)
        break
      case '/':
        setDisplay(`${op1 / op2}`)
        break
      default:
        throw new Error('invalid operator')
    }
  }

  const handleReset: FormEventHandler = (e) => {
    e.preventDefault()
    setDisplay('0')
    setMemory(undefined)
    setOperator(undefined)
  }
  return (
    <div className="grid gap-6">
      <form
        className="grid gap-6 w-full"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <section className="bg-screen rounded text-white">
          <h2 className="sr-only">Calculator Display</h2>
          <div>
            <label htmlFor="display" className="sr-only">
              Display
            </label>
            <input
              className="bg-screen border-none rounded text-right w-full text-2xl px-6 py-7"
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
              <input className="btn btn-primary" type="submit" value="=" />
            </li>
          </ul>
        </section>
      </form>
    </div>
  )
}

export default CalculatorPage
