var path = require("path");
module.exports = {
	entry: __dirname+"/js/index.js",
	output:{
		path:__dirname+'/create',
		filename:"bundle.js"
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loaders:["style-loader","css-loader"],
				include:path.resolve(__dirname,"css"),
				exclude:path.resolve(__dirname,"node_modules")
			},
			{
				test:/\.jsx?$/,
				loaders:["react-hot-loader","babel-loader?presets[]=es2015&presets[]=react"],
				include:path.resolve(__dirname,"js"),
				exclude:path.resolve(__dirname,"node_modules")
			}
		]
	}
}
