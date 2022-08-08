const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ibvaky',
  screenshotOnRunFailure: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/report/mochawesome-report',
    charts: true,
    reportPageTitle: 'Grammys Automatic Tests',
    reportFilename: 'GrammyAutomationTest',
    timestamp: 'mmddyyyy_HHMMss',
    embeddedScreenshots: true,
    overwrite: false,
    json: true,

  },
  lgcf_prod_homepage: "https://www.latingrammyculturalfoundation.org/es",
  lgcf_dev_homepage: "https://www.latingrammyculturalfoundation.org/",
  grammys_prod: "https://grammy.com",
  grammys_dev: "https://develop-tra-grammy.vercel.app/",
  recordingacademy_prod: "https://www.recordingacademy.com/",
  recordingacademy_dev: "https://tra-recording-academy.vercel.app/",
  musicares_prod: "https://www.musicares.org/",
  musicares_dev: "https://develop-tra-musicares-org.vercel.app//",
  latingrammys_prod_homepage: "https://www.latingrammy.com/es",
  latingrammys_dev_homepage: "https://dev-lra-grammy.vercel.app/es",
  musicares_dev: "https://www.musicares.org/",
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})