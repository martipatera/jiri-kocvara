import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/flowbite/**/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff",
          "100":"#dbeafe",
          "200":"#bfdbfe",
          "300":"#93c5fd",
          "400":"#60a5fa",
          "500":"#3b82f6",
          "600":"#2563eb",
          "700":"#1d4ed8",
          "800":"#1e40af",
          "900":"#1e3a8a",
          "950":"#172554",
        },
        "orange":"#ef5B2a",
      },
      backgroundImage:{
        "mainImage":"url('../public/gymBackground.jpg')",
        "JKDum":"url('../JKFotky/JKDum.jpg')",
        "JKDeadlift":"url('../JKFotky/JKdeadlift.jpg')",
        "bgMain":"url('../JKFotky/JirkaKocvara.jpg')",
        "bgMain1":"url('../JKFotky/JKresized.jpg')",
        "bgMain2":"url('../JKFotky/JirkaKocvaraR.jpg')",
      },
      animation: {
				fade: 'fadeIn 1s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
      
    },
    fontFamily: {
      'body': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji',
  ],
      'sans': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji',
  ]
      
    },
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(), // Correctly require Flowbite plugin
  ],
};
