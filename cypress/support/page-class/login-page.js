import commonsFunctions from '../page-class/commons-page'
import commonLocators from '../../locators/common-Locators.json'
import loginLocators from '../../locators/login-Locator.json'
import dashboardLoacators from '../../locators/dashboard-locators.json'
class Dashboard {



	// perform a sucessful login.
	login (user, pwd) {
		commonsFunctions.entertextInAnElement(loginLocators.email, user)
		commonsFunctions.entertextInAnElement(loginLocators.password, pwd)
		commonsFunctions.clickOnElement(commonLocators.submitButton)
	}
	
	//The command checks if the button has right text and is in neabled state
	verifyloginbuttonTextandState () {
		commonsFunctions.getAnyElement(commonLocators.submitButton).should('contain', loginLocators.loginButtonText).and('be.enabled')
	}

	// this command will assert error messages for when both the fields are left empty
	verifyErrorMessageOnEmptyLoginFields () {
		const loginErrors = [loginLocators.emptyEmailErrorText,loginLocators.emptyUserPwdErrorText]
		commonsFunctions.getAnyElement(loginLocators.loginPagemainItemsClass).find(loginLocators.loginPageErroMessageClass).each((a, index) => {
			expect(a[0].innerHTML).to.contain(loginErrors[index])
		})
	}

	//The command checks if the button has right text and is in neabled state
	verifyLoggedInUser (user) {
		commonsFunctions.getAnyElement(dashboardLoacators.profileSettingMenuItem).find('strong').invoke('text')
			.should('contains', user)
	}
}
export default new Dashboard()