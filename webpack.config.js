const path = require('path');  // Стандартный модуль Node.js для работы с путями

module.exports = {
  entry: './src/index.js',  // Входная точка приложения
  output: {
    filename: 'bundle.js',  // Название выходного файла
    path: path.resolve(__dirname, 'dist'),  // Директория для вывода собранного файла
  },
  module: {
    rules: [
      {
        test: /\.css$/i,  // Регулярное выражение для определения CSS-файлов
        use: ['style-loader', 'css-loader'],  // Загрузчики для обработки CSS
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080,  // Порт для dev-серверов
  },
};