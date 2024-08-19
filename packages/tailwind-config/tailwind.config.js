/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    "./app/**/*.{html,js,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      secondary: "#FFC107",
      success: "#26CB17",
      brand: "#08BCCE",
      white: "#fff",
      "brand-bg": "#122221",
    },
    extend: {},
    keyframes: {
      "fade-in-down": {
        "0%": {
          visibility: "hidden",
          opacity: 0,
          transform: "translate3d(0, -100%, 0)",
        },
        "50% ": {
          visibility: "hidden",
          opacity: 0 /* Make it visible but still transparent */,
        },

        "80% ": {
          visibility: "visible",
          opacity: 0 /* Make it visible but still transparent */,
        },
        "100% ": {
          opacity: 1,
          transform: "translate3d(0, 0, 0)",
        },
      },

      "fade-out-up": {
        "0%": {
          opacity: 1,
          transform: "transalteY(0)",
        },
        "100%": {
          visibility: "hidden",
          opacity: 0,
          transform: "translateY(-100%)",
        },
      },

      "slide-in-down": {
        "0%": {
          visibility: "hidden",
          transform: "translate3d(0, -100%, 0)",
        },
        "100%": {
          transform: "translate3d(0, 0, 0)",
        },
      },
      jiggle: {
        "0%": {
          transform: "scale3d(1, 1, 1)",
        },
        "30%": {
          transform: "scale3d(1.25, 0.75, 1)",
        },
        "40%": {
          transform: "scale3d(0.75, 1.25, 1)",
        },
        "50%": {
          transform: "scale3d(1.15, 0.85, 1)",
        },
        "65%": {
          transform: "scale3d(0.95, 1.05, 1)",
          color: "#fcfcfd",
        },
        "75%": {
          transform: "scale3d(1.05, 0.95, 1)",
        },
        "100%": {
          transform: "scale3d(1, 1, 1)",
          color: "#fd7014",
          filter: "drop-shadow(10px 7px 10px #fd7014)",
        },
      },

      glow: {
        "0%": {
          color: "#fcfcfd",
        },
        "30%": {
          color: "#235784",
        },
        "100%": {
          color: "#fd7014",
          // borderRadius: "100%",
        },
      },
      scale: {
        "0%": { transform: "scale(.5)" },
        "0%": { transform: "scale(.8)", filter: "brightness(90%)" },
        "100%": { transform: "scale(1)", filter: "brightness(70%)" },
      },
      pulsing: {
        "0%": { transform: "scale(1)", filter: "brightness(70%)" },
        "50%": { transform: "scale(1.1)", filter: "brightness(90%)" },
        "100%": { transform: "scale(1)", filter: "brightness(70%)" },
      },
      float: {
        "0%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" },
        "100%": { transform: "translateY(0)" },
      },
    },
    animation: {
      fadeindown: "fade-in-down 1s ease-in 0.25s 1",
      fadeoutup: "fade-out-up 1s ease-in-out 0.5s  1",
      slideindown: "slide-in-down 1s ease-in-out 0.25s 1",
      glow: "glow 0.6s ease-in-out 0.25s 1",
      jiggle: "jiggle 0.6s ease-in-out 0.25s 1",
      scale: "scale .8s ease-in-out both",
      pulsing: "pulsing 1s ease-in-out both",
      float: "float 1s ease-in-out both",
    },
  },
  plugins: [],
};
