Cypress.on('window:before:load', (win) => {
  win.ga = cy.stub().as('ga')
})

var json = require('../../../fixtures/AnalyticsAndGTMRAUrls.json')
var urls = Object.values(json.urls)

describe('Validate RECORDING ACADEMY PROD Home Page', { tags: 'prod' }, function () {

  beforeEach(function () {
    cy.viewport(1400, 900)
    cy.fixture('config.json').as('cfg');
  })

  it('Open MUSICARES Home Page', function () {
    defaultCommandTimeout: 20000
    cy.openRECORDINGACADEMYprodhomepage()
  })

  var urls = json.urls
  urls.forEach(url => {
    it(`Checking ${url}`, function () {
      cy.visit(url)
      cy.wait(3000);
      cy.get('@ga')
        // ensure GA was created with our google analytics ID
        .should('be.calledWith', 'create', this.cfg.gaTrackerIdRECORDINGACADEMY)
        .and('be.calledWithMatch', /.+send/, 'pageview')
      cy.log('GA validated')
      cy.log('Validating GTM')
      cy.checkGTM("gtm")
      cy.log('GTM Validated')
      cy.log('Validation Complete')
    })
  })

})