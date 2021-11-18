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
