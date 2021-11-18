import { format } from 'lib/utils'

describe('format', () => {
  it(`returns 1,000 for displayValue of 1000`, async () => {
    const actual = format('1000')
    expect(actual).toBe('1,000')
  })

  it(`returns 1,000,000 for displayValue of 1,000,000`, async () => {
    const actual = format('1,000,000')
    expect(actual).toBe('1,000,000')
  })

  it(`returns 25. for displayValue of 25.`, async () => {
    const actual = format('25.')
    expect(actual).toBe('25.')
  })

  it(`returns 0. for displayValue of .`, async () => {
    const actual = format('.')
    expect(actual).toBe('0.')
  })
})
