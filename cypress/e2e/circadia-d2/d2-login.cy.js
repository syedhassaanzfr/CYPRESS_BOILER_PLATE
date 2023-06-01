import commonsFunctions from '../../support/page-class/commons-page'
import loginPage from '../../support/page-class/login-page'
import commonLocators from '../../locators/common-Locators.json'
import loginLocators from '../../locators/login-Locator.json'
import dashboardLoacators from '../../locators/dashboard-locators.json'
import config from '../../fixtures/config.json'
import constants from '../../fixtures/constants.json'
const utility = require('../../support/utility')


describe('login circadia d2 env', () => {

	beforeEach(() => {
		commonsFunctions.navigateToUrl('/')
	})

	it('caseA || caseB || caseC', () => {
		loginPage.verifyloginbuttonTextandState() 
		commonsFunctions.clickOnElement(commonLocators.submitButton)
		loginPage.verifyErrorMessageOnEmptyLoginFields()
	})

	it('verify error message on entering incorrect fields for login creds', () => {
		loginPage.login('email'+ utility.getRandomString(4),'pwd'+ utility.getRandomString(4) )
		commonsFunctions.verifyLoaderNotExist()
		const msg = constants.notifications.invalidLoginCreds.message
		const desc = constants.notifications.invalidLoginCreds.description
		commonsFunctions.getMessageNotificationWithDescription(msg, desc)
	})

	it('successful login', () => {
		loginPage.login(Cypress.env('loginEmail'), Cypress.env('loginPassword'))
		commonsFunctions.getMessageNotification(loginLocators.successfulLoginNotificationText)
		commonsFunctions.verifyLoaderNotExist()
		commonsFunctions.clickOnElement(dashboardLoacators.profileSettingIconId)
		loginPage.verifyLoggedInUser(config.userProfileText + config.name)
	})

	it('Data driven games', () => {
		loginPage.login(Cypress.env('loginEmail'), Cypress.env('loginPassword'))
		loginPage.verifyloginbuttonTextandState() 
		commonsFunctions.clickOnElement(commonLocators.submitButton)
		loginPage.verifyErrorMessageOnEmptyLoginFields()
	})
})
