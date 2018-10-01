const path = require('path');

module.exports = {

//		entry: "./app/assets/scripts/App.js",	
//		output: {
//			path: path.resolve(__dirname, "./app/temp/scripts"),
//			filename: "App.js"
	
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "[name].js"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
}

//	module: {
//		loaders: [
//			{
//				loader: 'babel-loader',
//				query: {
//					presets: ['es2015']
//				},
//				test: /\.js$/,
//				exclude: /node_modules/
//			}
//		]
//	}
//}