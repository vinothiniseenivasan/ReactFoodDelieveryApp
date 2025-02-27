const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      console.log("🔧 Setting up Cucumber Plugin...");

      await addCucumberPreprocessorPlugin(on, config);
      
      console.log("✅ Cucumber Plugin Registered!");

      on('file:preprocessor', createBundler());

      return config;
    },
    baseUrl: 'http://localhost:1234/',
    specPattern: 'cypress/e2e/**/*.feature', // Ensure this matches your folder structure
    supportFile: false,
  },
});
