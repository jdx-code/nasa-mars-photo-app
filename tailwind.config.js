/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './views/*.ejs',    
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

