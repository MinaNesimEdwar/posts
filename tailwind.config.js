/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container
        padding: '1rem', // Adds padding to the container
        screens: {
          sm: '100%',     // Small screen (mobile) full width
          md: '728px',    // Medium screen (tablet)
          lg: '984px',    // Large screen (laptop)
          xl: '1240px',   // Extra-large screen (desktop)
          '2xl': '1440px' // Extra-extra-large screen
        },
      },
    },
  },
  plugins: [],
};
