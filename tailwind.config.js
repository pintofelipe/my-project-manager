/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'beige-1': '#F7EEDD' , // este es el color del background ----guiarse del figma
      'beige-2': '#FFD299', // color para las cajas de los proyectos y los inputs
      'beige-3':'#FAE7C3', // color para el background de las cajas que estan como protector del formulario y lor proyectos
      'marron-1': '#8F1E00', // color para el texto del titulo del proyecto y los titulos de los botones
      'marron-2': '#DD6236', // color para los botones de total y agregar proyecto
      'gray-1': '#2C2C2C' // color para las descripciones y la prioridad

    },
    extend: {},
  },
  plugins: [],
}

