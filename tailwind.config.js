/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    prefix: 'tw-',
    module: {
        rules: [ {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },]
    },

    theme: {
      extend: {},
    },
    plugins: [],
  }