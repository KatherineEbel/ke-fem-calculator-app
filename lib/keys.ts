export type KeyKind = 'digit' | 'delete' | 'operator' | 'decimal'
export type OperatorKind = '+' | '-' | 'x' | '/'

export interface KeyConfig {
  value: string
  kind: KeyKind
  className?: string
}

export const calculatorKeys: KeyConfig[] = [
  { value: '7', kind: 'digit' },
  { value: '8', kind: 'digit' },
  { value: '9', kind: 'digit' },
  { value: 'del', kind: 'delete', className: 'btn-accent' },
  { value: '4', kind: 'digit' },
  { value: '5', kind: 'digit' },
  { value: '6', kind: 'digit' },
  { value: '+', kind: 'operator' },
  { value: '1', kind: 'digit' },
  { value: '2', kind: 'digit' },
  { value: '3', kind: 'digit' },
  { value: '-', kind: 'operator' },
  { value: '.', kind: 'decimal' },
  { value: '0', kind: 'digit' },
  { value: '/', kind: 'operator' },
  { value: 'x', kind: 'operator' },
]
