import { Input } from 'lib/keys'

interface Props {
  input: Input
  onClick: (input: Input) => void
}

export default function CalculatorKey({ onClick, input }: Props) {
  return (
    <button
      className={`btn ${input === 'del' ? 'btn-accent' : 'btn-secondary'}`}
      type="button"
      onClick={() => onClick(input)}
    >
      {input}
    </button>
  )
}
