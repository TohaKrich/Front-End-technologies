// webpack.config.js 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = { 
 // ... 
	output: { 
	path: path.resolve(__dirname, './dist'), 
	filename: '[name].bundle.js', 
 }, 
 devServer: {
        port: 8888,
        open: true,
    },
 module: {
    rules: [
      {
        test: /\.scss$/, // регулярний вираз для перевірки розширення файлів
        use: [
        	MiniCssExtractPlugin.loader,
          	'css-loader', // обробляє імпорти та залежності CSS файлів
          	'sass-loader' // компілює SCSS в CSS
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  },
 plugins: [ 
	new HtmlWebpackPlugin({ 
		title: 'webpack Boilerplate', 
		template: path.resolve(__dirname, './src/pages/index.html'), // шаблон
		filename: 'index.html', // ім'я вихідного файлу
	}), 
	new HtmlWebpackPlugin({ 
		title: 'webpack Boilerplate',
		template: path.resolve(__dirname, './src/pages/news.html'), // шаблон
		filename: 'news.html', // ім'я вихідного файлу
	}),
	new HtmlWebpackPlugin({ 
		title: 'webpack Boilerplate',
		template: path.resolve(__dirname, './src/pages/photo.html'), // шаблон
		filename: 'photo.html', // ім'я вихідного файлу
	}),
	new HtmlWebpackPlugin({ 
		title: 'webpack Boilerplate',
		template: path.resolve(__dirname, './src/pages/rozklad.html'), // шаблон
		filename: 'rozklad.html', // ім'я вихідного файлу
	}),
	new CleanWebpackPlugin(),
	new MiniCssExtractPlugin(),
 ],
}