const webpack = require("webpack");
// import webpack from "webpack";
module.exports = config => {
	if (Array.isArray(config.plugins)) {
		config.plugins.push(
			new webpack.ProvidePlugin({ Buffer: ["buffer", "Buffer"] })
		);
	}
	return config;
};
