// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          to: { width: "var(--tw-type-ch)" },
        },
        caret: {
          "0%,100%": { borderColor: "transparent" },
          "50%": { borderColor: "currentColor" },
        },
      },
      animation: {
        typewriter: "typewriter var(--tw-type-duration,2.2s) steps(var(--tw-type-steps,42)) forwards",
        caret: "caret 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};
