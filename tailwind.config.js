/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#212121',
        'dark-cover': "#0C0C0C",
        'primary': '#21BF73'
      },
      textColor: {
        'primary': '#21BF73',
        'dark': '#212121',
        'dark-cover': "#0C0C0C",
      },
      fill: {
        'primary': '#21BF73',
        'dark': '#212121',
        'dark-cover': "#0C0C0C",
      },
      ringColor: {
        'primary': '#21BF73',
        'dark': '#212121',
        'dark-cover': "#0C0C0C",
      },
      borderColor: {
        'primary': '#21BF73',
        'dark': '#212121',
        'dark-cover': "#0C0C0C",
      }
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes:["light","dark"],
  },
}