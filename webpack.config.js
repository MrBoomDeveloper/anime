const path = require("path");

module.exports = {
	entry: {
		home: "./src/js/home.js"
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "docs/js"),
		clean: true
	},
	mode: "production"
}