import { render, screen } from '@testing-library/react'
import Calculator         from 'pages'

describe('Calculator', () => {
  it (`renders`, async () => {
    render(<Calculator/>)
    expect(screen.getByRole('heading', { name: /calc/i})).toBeInTheDocument()
  })
})
