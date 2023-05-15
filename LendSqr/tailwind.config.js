/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFF",
        primaryColor: "#213F7D",
        textColor: "#545F7D",
        secondaryColor: "#39CDCC",
        sidebarLinks: "#213F7D",
        blacklist: "#E4033B",
        pending: "#E9B200",
        active: "#39CD62",
        navigate: "rgba(33, 63, 125, 0.1)"
      },
      fontFamily: {
        'Roboto':  ("sans-serif"),
        'Work Sans': ("sans-serif")
      },
    },
  },
  plugins: [],
}

