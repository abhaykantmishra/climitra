/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '430px'}, // iPhone 16 Pro Max and similar
      },
      colors: {
        "climitra-green": "#1C6248",
        "climitra-light-green": "#6BBD4E",
        "climitra-bg-green": "#E7FFF7",
        "climitra-text": "#6C6C6C",
        "climitra-dark": "#0C0C0C",
        "climitra-primary": "#0F161E",
      },
      fontFamily: {
        montserrat: ["Montserrat", "system-ui", "sans-serif"],
        "source-sans": ["Source Sans Pro", "system-ui", "sans-serif"],
        sofia: ["Sofia Pro", "system-ui", "sans-serif"],
      },
      aspectRatio: {
        2.1: "2.1",
        34.48: "34.48",
        1.775: "1.775",
        1.78: "1.78",
      },
      spacing: {
        "0.75rem": "0.75rem",
        "1rem": "1rem",
        "1.176rem": "1.176rem",
        "1.375rem": "1.375rem",
        "2.125rem": "2.125rem",
        "2.25rem": "2.25rem",
        "2.25rem": "2.25rem",
        "3.1875rem": "3.1875rem",
        "4.625rem": "4.625rem",
        "8.375rem": "8.375rem",
        "9.4375rem": "9.4375rem",
        "52.75rem": "52.75rem",
      },
      fontSize: {
        "0.75rem": "0.75rem",
        "1rem": "1rem",
        "1.375rem": "1.375rem",
        "2.25rem": "2.25rem",
      },
      borderRadius: {
        "0.785rem": "0.785rem",
        "1.176rem": "1.176rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
