/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: {
          100: '#12142A',
          200: '#151A32',
          300: '#333F6D',
          400: '#424D71',
        },
      },
    },
  },
  plugins: [],
};
