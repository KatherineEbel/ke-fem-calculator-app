import { evaluate, format } from 'lib/utils'

describe('utils', () => {
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

  describe('evaluate', () => {
    it(`can subtract `, async () => {
      const actual = evaluate('1,000', '300', '-')
      expect(actual).toBe('700')
    })

    it(`can add`, async () => {
      const actual = evaluate('1,000,000', '1,300', '+')
      expect(actual).toBe('1001300')
    })

    it(`can divide`, async () => {
      const actual = evaluate('64', '8', '/')
      expect(actual).toBe('8')
    })

    it(`can multiply`, async () => {
      const actual = evaluate('9', '7', 'x')
      expect(actual).toBe('63')
    })
  })
})
