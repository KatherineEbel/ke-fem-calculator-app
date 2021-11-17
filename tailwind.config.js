module.exports = {
  mode: 'jit',
  purge: [
    './layout/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    borderRadius: {
      sm: '.3125rem',
      DEFAULT: '.625rem',
      lg: '.8125rem',
      full: '9999px',
    },
    boxShadow: {
      'inner-primary': 'inset 0px -4px 0px var(--key-primary-dk)',
      'inner-primary-alt': 'inset 0px -4px 0px var(--key-primary-dk-alt)',
      'inner-primary-active': 'inset 0px -2px 0px var(--key-primary-dk)',
      'inner-accent': 'inset 0px -4px 0px var(--key-accent-dk)',
      'inner-accent-active': 'inset 0px -2px 0px var(--key-accent-dk)',
      'inner-secondary': 'inset 0px -4px 0px var(--key-secondary-dk)',
      'inner-secondary-active': 'inset 0px -2px 0px var(--key-secondary-dk)',
      none: '0 0 #000000',
    },
    colors: {
      main: 'var(--background-main)',
      'keypad/toggle': 'var(--background-keypad-toggle)',
      screen: 'var(--background-screen)',

      'key-primary-lt': 'var(--key-primary-lt)',
      'key-primary': 'var(--key-primary)',
      'key-primary-dk': 'var(--key-primary-dk)',

      'key-accent-lt': 'var(--key-accent-lt)',
      'key-accent': 'var(--key-accent)',
      'key-accent-dk': 'var(--key-accent-dk)',

      'key-secondary-lt': 'var(--key-secondary-lt)',
      'key-secondary': 'var(--key-secondary)',
      'key-secondary-dk': 'var(--key-secondary-dk)',
      'text-contrast': 'var(--text-contrast)',
      'text-color': 'var(--text-color)',
      white: 'var(--white)',
    },
    fontFamily: {
      sans: ['Spartan', 'sans-serif'],
    },
    fontSize: {
      sm: [
        '0.75rem',
        {
          letterSpacing: '1px',
          lineHeight: '0.84rem',
        },
      ],
      reg: [
        '1rem',
        {
          letterSpacing: '-0.016875rem',
          lineHeight: '1.12rem',
        },
      ],
      md: [
        '1.25rem',
        {
          letterSpacing: '-0.020625rem',
          lineHeight: '1.4rem',
        },
      ],
      lg: [
        '28px',
        {
          letterSpacing: '-0.47px',
          lineHeight: '31.36px',
        },
      ],
      xl: [
        '32px',
        {
          letterSpacing: '-0.53px',
          lineHeight: '35.84px',
        },
      ],
      '2xl': [
        '3rem',
        {
          letterSpacing: '-.05rem',
          lineHeight: '3.36rem',
        },
      ],
      //  gaps 13px 24px 28px
    },
    extend: {
      spacing: {
        calculator: '33.75rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
