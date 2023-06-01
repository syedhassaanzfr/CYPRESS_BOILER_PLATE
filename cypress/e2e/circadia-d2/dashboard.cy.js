import commonsFunctions from '../../support/page-class/commons-page'
import loginPage from '../../support/page-class/login-page'
import dashboardLoacators from '../../locators/dashboard-locators.json'
import config from '../../fixtures/config.json'


describe('Dashboard Tests', () => {

	const userEmail = Cypress.env('loginEmail')
	const userPwd = Cypress.env('loginPassword')
	before(() => {
		commonsFunctions.navigateToUrl('/')
		loginPage.login(userEmail, userPwd)
	})
	beforeEach(() => {
		cy.restoreLocalStorage()
		commonsFunctions.navigateToUrl('/')
	})
	afterEach(() => {
		cy.saveLocalStorage()
	})

	it('verify error message on clicking submit button with empty fields', () => {
		commonsFunctions.verifyLoaderNotExist()
		commonsFunctions.clickOnElement(dashboardLoacators.profileSettingIconId)
		loginPage.verifyLoggedInUser(config.userProfileText + config.name)
	})

	it('verify error message on clicking submit button with empty fields', () => {
		commonsFunctions.getAnyElement(dashboardLoacators.dashboardHeading).should('contains', 'Dashboard')
	})

})
