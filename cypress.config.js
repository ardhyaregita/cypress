const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        specPattern : "cypress/support/e2e",
        supportFile : false
    },
    pageLoadTimeout : 60000
    
})
