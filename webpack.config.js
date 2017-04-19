//配置webpack

//entry:配置入口资源
//outputt：配置编译后的资源!!!->所有的文件出口!!
//module：资源处理->配置loader
//resolve:配置资源别名/扩展名等->扩展名
//pluagins:插件，比loader更强大
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtracTextPlugin = require('extract-text-webpack-plugin');
//此插件用来提取内部的CSS到一个单独的文件暂时屏蔽
//入口文件夹

var entryPath = path.join(__dirname, './src');
var outputPath = path.resolve(__dirname, './dist');
//入口文件
//main-0495bb6bccc717538b2b 

//webpack自身生成的diamante会包裹很多额外的代码这些代码是为了控制流程所使用
//生成的代码也比较简单mark
//module的作用就是使用loaders
module.exports = {
	entry: entryPath + '/main.js',
	output: {
		path: outputPath,
		filename: './script/bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname + 'dist'),
		filename: 'bundle.js',
		hot: true,
		watchContentBase: true
	},
	devtool: "cheap-module-source-map",
	module: {
		rules: [{
			test: /\.less$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader'
			}, {
				loader: 'less-loader',
				// options: {
				// 	resources: './src/stylesheets/index.less',
				// },
			}, ],
		}, {
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
			}]
		}, {
			test: /\.(jpg|png|gif|svg)$/,
			use: [{
				loader: 'url?limit=10000&name=img/[name].[hash].[ext]',
				loader: 'file-loader'
			}]
		}],
	},
	plugins: [
		//读取index.html作为模板再输出新的html
		new HtmlWebpackPlugin({
			// title: 'My App',
			filename: 'index.html',
			template: './index.html',
		}),
	]
}