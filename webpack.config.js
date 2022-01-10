const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		assetModuleFilename: "img/[name][ext]",
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|gif|jpeg)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [new CopyPlugin({ patterns: [{ from: "./src/img", to: "img" }] })],
};
