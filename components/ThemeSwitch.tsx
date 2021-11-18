import { useTheme } from 'next-themes'
export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <form>
      <div className="flex flex-col gap-1.5">
        <label
          className=" flex self-stretch justify-around pl-0.5"
          htmlFor="theme"
        >
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </label>
        <input
          className="switch"
          type="range"
          name="theme"
          id="theme"
          min="1"
          max="3"
          step="1"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
      </div>
    </form>
  )
}
