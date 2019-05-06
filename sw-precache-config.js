module.exports = {
    staticFileGlobs: [
      'build/static/css/**.css',
      'build/static/js/**.js',
      'https://embed-ssl.wistia.com/deliveries/4ee180b4165bac33a9119ed6c44ceb0dd691788b.bin',
    ],
    swFilePath: './build/service-worker.js',
    stripPrefix: 'build/',
    handleFetch: false,
    runtimeCaching: [{
      urlPattern: /this\\.is\\.a\\.regex/,
      handler: 'networkFirst'
    }]
  }