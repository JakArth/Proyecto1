
// const cucumber = require("cypress-cucumber-preprocessor/steps").default
const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: 'qv4kni',
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here

      // on("file:preprocessor", cucumber())
      
    },

    // specPattern: "cypress/e2e/*.feature",
    testIsolation: false,
    video: true,
    defaultCommandTimeout: 15000,
    trashAssetsBeforeRuns: false,
    pageLoadTimeout: 9000,
  },
});
