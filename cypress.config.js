const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // viewportHeight: 1440,
  // viewportWidth: 900,
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      requestMode: true,
    }
  },
  fixturesFolder: false,
  video: false
})