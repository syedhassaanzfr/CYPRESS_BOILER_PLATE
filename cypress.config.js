const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
	'defaultCommandTimeout': 15000,
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		charts: true,
		reportPageTitle: 'Report Page Title Goes Here',
		embeddedScreenshots: true,
		video: false,
		retries: 1,
		html: false,
		json: true,
		reportDir: 'cypress/reports',
		reportFilename: 'circadiaWeb-[datetime]',
		overwrite: false,
		enableCode: false,
		enableTestCode: false,
		timestamp: true

    
	},

	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
			require('cypress-mochawesome-reporter/plugin')(on)
		},
		baseUrl: 'base URl goes here' // set ur base url over here
	},
	env: {
		loginEmail: process.env.LOGIN_EMAIL,
		loginPassword: process.env.LOGIN_PASSWORD,
	}
})
