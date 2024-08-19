/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mountains-bg' : "url('/src/assets/img/bg-img.jpeg')",
        'car-bg' : "url('/src/assets/img/car.jpg')",
        'card-bg' : "url('/src/assets/img/card.jpg')",
        'flower-bg' : "url('/src/assets/img/flower-bg.svg')",
        'boat-bg' : "url('/src/assets/img/image-205.svg')",
        'article-bg' : "url('/src/assets/img/article-page-bg.svg')",
      },
    },
  },
  plugins: [],
}

