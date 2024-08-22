/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      jakarta: ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'shadow' : '0 32px 64px -12px rgba(85, 105, 135, 0.13)',
      },

      colors: {
        'primary-purple-blue-100' : '#E9E3FF',
        'primary-purple-blue-200' : '#B9A2FF',
        'primary-purple-blue-400' : '#7551FF',
        'primary-purple-blue-500' : '#4318FF',
        'primary-purple-blue-600' : '#3311DB',

        'secondary-grey-200' : '#F6F8FD',
        'secondary-dark-grey-600' : '#68769F',
        'secondary-dark-grey-900' : '#1B2559',
      },

      maxWidth: {
        '1440' : '1440px',
      },
    },
  },
  plugins: [],
}