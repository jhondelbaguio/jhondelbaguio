module.exports = {
	siteMetadata: {
		title: 'Jhondel Baguio | Web Developer',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Roboto+Condensed`],
			},
		},
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: './src/assets/images/jb-icon.png',
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false,
				},
			},
		},
	],
}
