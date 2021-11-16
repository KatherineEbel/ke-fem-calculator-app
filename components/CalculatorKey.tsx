import { KeyConfig, KeyKind } from 'lib/keys'

interface Props {
  config: KeyConfig
  onClick: (kind: KeyKind, value: string) => void
}

export default function CalculatorKey({ onClick, config }: Props) {
  return (
    <button
      className={`btn ${config.className ?? 'btn-secondary'}`}
      type="button"
      onClick={() => onClick(config.kind, config.value)}
    >
      {config.value}
    </button>
  )
}
