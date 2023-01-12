/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const path = require('path');

module.exports = (webpackConfigEnv, argv) => {
	const defaultConfig = singleSpaDefaults({
		orgName: 'thanh',
		projectName: 'home-module',
		webpackConfigEnv,
		argv,
	});

	return merge(defaultConfig, {
		// modify the webpack config however you'd like to by adding to this object]
		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			modules: [path.resolve(__dirname, '.'), 'node_modules'],
		},
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
					use: [
						// Creates `style` nodes from JS strings
						'style-loader',
						// Translates CSS into CommonJS
						'css-loader',
						// Compiles Sass to CSS
						'sass-loader',
					],
				},

				{
					test: /\.(png|jp(e*)g|gif)$/,
					type: 'asset/resource',
				},

				{
					test: /\.svg$/,
					oneOf: [
						{
							issuer: /\.s?css$/,
							type: 'asset/resource',
						},
						{
							use: [
								{
									loader: '@svgr/webpack',
									options: {
										svgoConfig: {
											plugins: [
												{
													name: 'preset-default',
													params: {
														overrides: { removeViewBox: false },
													},
												},
											],
										},
									},
								},
								{
									loader: 'file-loader',
								},
							],
							type: 'javascript/auto',
						},
					],
				},
			],
		},
	});
};
