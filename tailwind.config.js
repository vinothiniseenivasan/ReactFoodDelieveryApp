/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    // which files are using tailwind css
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 3s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '75%' :{  opacity: 0.75 },
          '50%': { opacity: 0.60 },
        },
      },
    },
  },
  plugins: [],
}


// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         blink: 'blink 1s linear infinite',
//       },
//       keyframes: {
//         blink: {
//           '0%, 100%': { opacity: 1 },
//           '50%': { opacity: 0 },
//         },
//       },
//     },
//   },
//   plugins: [],
// }
