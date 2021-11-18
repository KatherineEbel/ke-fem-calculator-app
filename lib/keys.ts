export type KeyKind = 'digit' | 'delete' | 'operator' | 'decimal'
export type OperatorKind = '+' | '-' | 'x' | '/'

export type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
export type Command = '=' | 'del' | '.' | 'reset'
export type Operator = 'x' | '/' | '+' | '-'
export type Input = Digit | Command | Operator

export function isDigit(input: Input): input is Digit {
  return /[0-9]/.test(input)
}

export function isCommand(input: Input): input is Command {
  return /(del|reset|[=.])/.test(input)
}

export function isOperator(input: Input): input is Operator {
  return /[x+\/-]/.test(input)
}

export const calculatorKeys: Input[] = [
  '7',
  '8',
  '9',
  'del',
  '4',
  '5',
  '6',
  '+',
  '1',
  '2',
  '3',
  '-',
  '.',
  '0',
  '/',
  'x',
]
