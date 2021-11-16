import { useState } from 'react'

export default function AppHeader() {
  const [theme, setTheme] = useState<string>('1')
  return (
    <header className="flex justify-between items-center">
      <h1>calc</h1>
      <section className="text-sm flex gap-7 items-center">
        <h3 className="self-end mb-1">Theme</h3>
        <form>
          <div className="flex flex-col gap-1 place-items-center">
            <label
              className="flex self-stretch justify-around pl-0.5"
              htmlFor="theme"
            >
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </label>
            <input
              className="slider"
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
      </section>
    </header>
  )
}
