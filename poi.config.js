module.exports = {
  entry: './src/index',
  webpack(config) {
    config.target = 'electron-renderer'
    return config
  },
  homepage: './',
}
