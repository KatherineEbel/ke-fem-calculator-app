import ThemeSwitch from './ThemeSwitch'

export default function AppHeader() {
  return (
    <header className="flex justify-between items-center">
      <h1>calc</h1>
      <section className="theme-section text-sm flex gap-7 items-center">
        <h2 className="self-end mb-1">Theme</h2>
        <ThemeSwitch />
      </section>
    </header>
  )
}
