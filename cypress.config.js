const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://business.wind.app',
    email: '',
    companyName: 'TestCompany',
    pin: '1',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports/mocha",
    "overwrite": false,
    "html": false,
    "json": true
  }
});
