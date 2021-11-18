import { Operator } from './keys'

export function format(displayValue: string): string {
  if (displayValue === '.') return '0' + displayValue
  const num = +displayValue.replace(/,/g, '')
  if (isNaN(num)) return 'Error'
  const val = new Intl.NumberFormat('en', {
    style: 'decimal',
    useGrouping: true,
  }).format(num)
  return displayValue.endsWith('.')
    ? val + '.'
    : displayValue.startsWith('.')
    ? '0.' + val
    : val
}

export const evaluate = (op1: string, op2: string, operator: Operator) => {
  const firstVal = parseFloat(op1.replace(/,/g, '') || '0')
  const secondVal = parseFloat(op2.replace(/,/g, ''))
  switch (operator) {
    case '+':
      return `${firstVal + secondVal}`
    case '-':
      return `${firstVal - secondVal}`
    case 'x':
      return `${firstVal * secondVal}`
    case '/':
      return `${firstVal / secondVal}`
    default:
      return 'Error'
  }
}
