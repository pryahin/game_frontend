module.exports = {
	entry: {
		bundle: "./src/static/js/script.js"
	},
	
	output: {
		path: __dirname + '/src/built',
		filename: "[name].js"
	},

	resolve: {
    	extensions: ['.js']
	},

	module: {
		rules: [
			{
				test: /\.js$/,
        		use: {
        			loader: 'babel-loader',
        			options: {
          				presets: ['es2015']
          				}      
          			}
			}
		]
	},

	devtool: 'source-map'
};