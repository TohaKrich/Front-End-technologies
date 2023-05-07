// webpack.config.js 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
 ],
}