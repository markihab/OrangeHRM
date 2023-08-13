const { defineConfig } = require("cypress");

module.exports = defineConfig({
  compilerOptions: {
    types: ["cypress"],
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
