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
      'inner-primary': 'inset 0px -4px 0px #93261A',
      'inner-accent': 'inset 0px -4px 0px #414E73',
      'inner-secondary': 'inset 0px -4px 0px #B3A497',
    },
    colors: {
      main: 'hsl(222, 26%, 31%)',
      'keypad/toggle': 'hsl(223, 31%, 20%)',
      screen: 'hsl(224, 36%, 15%)',

      'key-primary': 'hsl(6, 63%, 50%)',
      'key-primary-dk': 'hsl(6, 70%, 34%)',

      'key-accent': 'hsl(225, 21%, 49%)',
      'key-accent-dk': 'hsl(224, 28%, 35%)',

      'key-secondary': 'hsl(31, 24%, 89%)',
      'key-secondary-dk': 'hsl(28, 16%, 65%)',

      'text-color': 'hsl(221, 14%, 31%)',
      white: 'hsl(0, 0%, 100%)',
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
