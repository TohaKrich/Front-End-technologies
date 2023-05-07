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
		template: path.resolve(__dirname, './src/pages/about.html'), // шаблон
		filename: 'about.html', // ім'я вихідного файлу
	}),
	new CleanWebpackPlugin(),
 ],
}