/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "primary-yellow": "#d97706",
        "primary-grey": "#d1d5db",
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.1)",
          100: "rgba(59,60,152,0.005)",
        },
        "light-white-custom": {
          DEFAULT: "rgba(59,60,152,0.2)",
          100: "rgba(59,60,152,0.005)",
        },
        grey: "#747A88",
        lightgrey: "#9ca3af",
        'placeholder-color': "#2B2C35",
      },
      backgroundImage: {
        'pattern': "url('/star-wars-space.jpg')",
        'hero-bg-2': "url('/hero-bg-2.png')",
        'hero-bg-3': "url('/hero-bg-3.png')",
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px) translateX(5px)' },
        },
      },
    },
  },
  plugins: [],
};