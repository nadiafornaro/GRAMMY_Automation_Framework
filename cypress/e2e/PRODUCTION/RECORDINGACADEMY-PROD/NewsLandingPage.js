/// <reference types="cypress-xpath" />



describe('Validate News Landing Page in GRAMMY PROD' ,{ tags: 'prod' }, function () {

    beforeEach(function () {
      cy.viewport(1400, 900)
      cy.fixture('config.json').as('cfg');
    })
  
    it('Open RECORDING ACADEMY Home Page', function () {
      cy.openRECORDINGACADEMYprodhomepage()
    })
  
    it('Open MusicNews landing page', function () {
    //  cy.contains('NEWS').should('be.visible')
      cy.get(':nth-child(3) > .block').click()
      cy.wait(5000)
    })
  
    it('Validate News Landing page default Elements', function () {
      cy.log('Validating News article details open from News landing page')
      cy.wait(2000) // waiting for the page fully load
      cy.contains('LATEST NEWS').should('have.text', 'LATEST NEWS')
      cy.contains('FILTER YOUR RESULTS BY:').should('have.text', 'FILTER YOUR RESULTS BY:')
      cy.get('.max-w-xl > .uppercase').should('be.visible')
        .should('have.text', 'Load More') // load more button
      cy.get('.flex-col.justify-center > :nth-child(3)').should('be.visible') // news articles content block
    })
  })