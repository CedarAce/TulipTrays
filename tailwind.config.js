/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
      },
      colors: {
        cream: { 50: "#F9F9F7", 100: "#F0F0EB" },
        charcoal: { 900: "#1A1A1A", 800: "#2D2D2D" },
        sage: { 500: "#84968B" },
      },
      borderRadius: {
        "3xl": "2rem",
      },
      // --- NEW ANIMATIONS START HERE ---
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in-up-delay": "fade-in-up 0.8s ease-out 0.2s forwards", // slight delay
        "fade-in": "fade-in 1s ease-out forwards",
        float: "float 6s ease-in-out infinite", // continuous floating
      },
    },
  },
  plugins: [],
};
