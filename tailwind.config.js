const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    colors: {
      'blue-gray': colors.blueGray,
      gray: colors.gray,
      white: colors.white
    }
  },
  variants: {
    extend: {}
  },
  tailwindcss: {
    cssPath: '~/assets/CSS/tailwind.css',
    configPath: 'tailwind.config.js',
    jit: true,
    exposeConfig: false,
    config: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
