export function windowOpenOnSamePage () {
	cy.window().then(win => {
		cy.stub(win, 'open').as('windowOpen').callsFake(function (url) {
			cy.visit(`/${url}`)
		})
	})
}
  