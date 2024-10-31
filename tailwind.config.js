const animate = require("tailwindcss-animate")
import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,vue}',
    './components/**/*.{js,jsx,vue}',
    './app/**/*.{js,jsx,vue}',
    './src/**/*.{js,jsx,vue}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate, daisyui],
}