module.exports = {
	outputDir: '../public',
	assetsDir: 'assets',
	filenameHashing: false,
	productionSourceMap: false,
	chainWebpack: config => {
		config.plugins.delete('pwa');
	}
}