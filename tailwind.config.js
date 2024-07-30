/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: "4.5px -5px 0 0 #18181B", // #18181B shadow
        myShadow2: "-4.1px -5px 0 0 #18181B", // #18181B shadow
      }
      
      
    },
  },
  plugins: [],
};
