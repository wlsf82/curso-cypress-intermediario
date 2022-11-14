const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1440,
  viewportWidth: 900,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost/',
  },
})