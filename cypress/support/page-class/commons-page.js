import commonLocators from '../../locators/common-Locators.json'
class Commons {

	// this command will navigate to the provided url
	navigateToUrl (url) {
		cy.visit(url)
	}

	// this command will navigate to the provided url
	verifyLoaderNotExist (url) {
		this.getAnyElement(commonLocators.loaderClass).should('not.exist')
	}

	// The command will allow you to click on any element present on the Dom.
	clickOnElement (element) {
		cy.get(element).click()
	}

	// The command will allow you to click on any label/Text present on the Dom.
	clickOnText (text) {
		cy.contains(text).click()
	}

	// the command will take any locator irrespecive of its type for e.g('.class', '#id', etc.) and clicks on it if it matches the text of that locator.
	clickOnElementWithtext (element, text) {
		cy.get(element).contains(text).click({force: true})
	}

	// the command will get an element irrespecive of its type for e.g('.class', '#id', etc.) and allows you to perform assertions or to itterate through an array.
	getAnyElement (element) {
		return cy.get(element)
	}
	// the command will take any locator irrespecive of its type for e.g('.class', '#id', etc.) and types in the provided Text.
	entertextInAnElement (element, text) {
		cy.get(element).type(text)
	}

	// this command will clear all the text from a texbox
	clearAllText (element) {
		cy.get(element).type('{selectall}{backspace}')
	}
	// this command will get the ticker notification without description that appear after any preocess on top right side.
	getMessageNotification (message) {
		cy.get(commonLocators.notificationSnackBarclass).then($notification => {
			cy.wrap($notification).should('exist')
			cy.wrap($notification).find(commonLocators.notificationSnackBarMessageClass).should('contain', message)
		  })
	}
	getMessageNotificationWithDescription (msg,desc) {
		cy.get(commonLocators.notificationSnackBarclass).then($notification => {
			cy.wrap($notification).should('exist')
			cy.wrap($notification).find(commonLocators.notificationSnackBarMessageClass).should('contain', msg)
			cy.wrap($notification).find(commonLocators.notificationSnackBarMessageDescriptionClass).should('contain', desc)
		  })
	}
}
export default new Commons()