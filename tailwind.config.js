/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'clr-primary': 'hsl(4, 100%, 67%);',
      'clr-neutral': {
        900: 'hsl(234, 29%, 20%);',
        600: 'hsl(235, 18%, 26%);',
        300: 'hsl(231, 7%, 60%);',
      },
      'clr-white': 'hsl(0, 0%, 100%);',
    },
    extend: {},
  },
  plugins: [],
}

