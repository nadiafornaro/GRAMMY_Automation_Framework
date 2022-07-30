Cypress.on('window:before:load', (win) => {
  win.ga = cy.stub().as('ga')
})
 
describe('Validate LATIN GRAMMY PROD Home Page' , { tags: 'latingrammyprod' }, function() {
  
    beforeEach(function() {
        cy.viewport(1400, 900)
        cy.fixture('config.json').as('cfg');
    })
   
    it('Open LATIN GRAMMY Home Page', function() {
      cy.openLATINGRAMMYprodhomepage()
      cy.get('@ga')
      // ensure GA was created with our google analytics ID
      .should('be.calledWith', 'create', this.cfg.gaTrackerIdLATINGRAMMY)
      .and('be.calledWithMatch', /.+send/, 'pageview')
      cy.log('GA validated')
       })

  it('Verify GTM is loaded in HomePage', () => {
    cy.checkGTM("gtm")
  })

})

