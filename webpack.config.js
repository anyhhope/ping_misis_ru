const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pages = [
  {
    filename: 'index.html',
    template: './src/index.html',
    chunks: ['index']
  },
  {
    filename: 'dash.html',
    template: './src/dash.html',
    chunks: ['dash']
  },
  {
    filename: 'cluster.html',
    template: './src/cluster.html',
    chunks: ['cluster']
  }
];
module.exports = {
  entry: {
    index: './src/index.js',
    dash: './src/dash.js',
    cluster: './src/cluster.js'
  },
  // Точка входа для сборки проекта

  output: {
    filename: '[name].bundle.js', // Имя выходного файла сборки
    path: path.resolve(__dirname, 'start'), // Путь для выходного файла сборки
  },

  module: {
    rules: [
      {
        test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
        use: ['style-loader', 'css-loader'], // Загрузчики, используемые для обработки CSS-файлов
      },
    ],
  },

  plugins: [
    ...pages.map(page => new HtmlWebpackPlugin({
      filename: page.filename,
      template: page.template,
      chunks: page.chunks
    }))
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'start'), // Каталог, откуда будет раздаваться статика
    },
    open: true, // Автоматически открывать браузер после запуска сервера разработки
  },

  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};