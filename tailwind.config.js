/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
'./app/**/*.{js,jsx,ts,tsx}',
'./components/**/*.{js,jsx,ts,tsx}'
],
theme: {
extend: {
colors: {
primary: '#7C3AED',
accent: '#06B6D4',
soft: '#F7F3FF'
},
borderRadius: {
'xl-2': '1.25rem'
}
}
},
plugins: [],
}