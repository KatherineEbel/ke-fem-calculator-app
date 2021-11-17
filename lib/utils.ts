export function format(displayValue: string): string {
  const num = +displayValue.replace(/,/g, '')
  if (isNaN(num)) return 'Error'
  return new Intl.NumberFormat('en', {
    style: 'decimal',
    useGrouping: true,
  }).format(num)
}
