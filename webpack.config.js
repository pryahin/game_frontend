module.exports = {
	entry: {
		bundle: "./src/static/js/script.js"
	},

	watch: true,

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
        		loader: "babel-loader"
			}
		]
	},

	devtool: 'source-map'
};