import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function AppHeader() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="flex justify-between items-center">
      <h1>calc</h1>
      <section className="theme-section text-sm flex gap-7 items-center">
        <h3 className="self-end mb-1">Theme</h3>
        <form>
          <div className="items-center">
            <label
              className=" flex self-stretch justify-around pl-0.5"
              htmlFor="theme"
            >
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </label>
            <input
              className="toggle"
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
