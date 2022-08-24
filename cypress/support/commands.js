// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('openLGCFprodhomepage', () => {
  cy.visit((Cypress.config('lgcf_prod_homepage')), { failOnStatusCode: false })
})

Cypress.Commands.add('openLGCFdevhomepage', () => {
  cy.visit((Cypress.config('lgcf_dev_homepage')), { failOnStatusCode: false })
  cy.get('input').type('EjlMB6OqSc13')
  cy.contains('Log in').click()
})

Cypress.Commands.add('openGRAMMYprodhomepage', () => {
  cy.visit((Cypress.config('grammys_prod')), { failOnStatusCode: false })
})

Cypress.Commands.add('openGRAMMYdevhomepage', () => {
  cy.visit((Cypress.config('grammys_dev')), { failOnStatusCode: false })
  //    cy.get('input').type('EjlMB6OqSc13')
  //   cy.contains('Log in').click()
})

Cypress.Commands.add('openRECORDINGACADEMYprodhomepage', () => {
  cy.visit((Cypress.config('recordingacademy_prod')), { failOnStatusCode: false })
})

Cypress.Commands.add('openRECORDINGACADEMYADVOCACYprodhomepage', () => {
  cy.visit((Cypress.config('recordingacademyadvocacy_prod')), { failOnStatusCode: false })
})

Cypress.Commands.add('openRECORDINGACADEMYdevhomepage', () => {
  cy.visit((Cypress.config('recordingacademy_dev')), { failOnStatusCode: false })
  cy.get('input').type('EjlMB6OqSc13')
  cy.contains('Log in').click()
})

Cypress.Commands.add('openMUSICARESprodhomepage', () => {
  cy.visit((Cypress.config('musicares_prod')), { failOnStatusCode: false })
})

Cypress.Commands.add('openMUSICARESdevhomepage', () => {
  cy.visit((Cypress.config('musicares_dev')), { failOnStatusCode: false })
  cy.get('input').type('EjlMB6OqSc13')
  cy.contains('Log in').click()
})

Cypress.Commands.add('openLATINGRAMMYprodhomepage', () => {
  cy.visit((Cypress.config('latingrammys_prod_homepage')), { failOnStatusCode: false })
})

Cypress.Commands.add('openLATINGRAMMYdevhomepage', () => {
  cy.visit((Cypress.config('latingrammys_dev_homepage')), { failOnStatusCode: false })
  cy.get('input').type('967k20dLqBws')
  cy.contains('Log in').click()
})

Cypress.Commands.add('checkPageStatus', () => {
  cy.request({
    url: this.url
  }).then((resp) => {
    expect(resp.status).to.equal(200);
  });
})

Cypress.Commands.add('clickLink', (label) => {
  cy.get('html:root').contains(label).click()
})

Cypress.Commands.add('checkGTM', (label) => {
  cy.window().then((window) => {
    assert.isDefined(window.dataLayer,
      'window.dataLayer is defined');

    assert.isDefined(
      window.dataLayer.find(x => x.event === label + ".js"),
      "GTM is loaded");
  })
});

Cypress.Commands.add('clickOnSearchGRAMMY', () => {
  cy.get('.w-\[330px\]')
    .click
})
