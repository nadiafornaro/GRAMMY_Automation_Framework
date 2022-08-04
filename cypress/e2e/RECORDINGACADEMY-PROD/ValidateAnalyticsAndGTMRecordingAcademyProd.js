Cypress.on('window:before:load', (win) => {
  win.ga = cy.stub().as('ga')
})

const urls = ['https://www.recordingacademy.com/',
  'https://www.recordingacademy.com/news',
  'https://www.recordingacademy.com/news/grammy-museum-preferred-bank-li-yu-grace-donation',
  'https://www.recordingacademy.com/membership',
  'https://www.recordingacademy.com/awards/rules-guidelines',
  'https://www.recordingacademy.com/about',
  'https://www.recordingacademy.com/advocacy/news',
  'https://www.recordingacademy.com/advocacy/news/california-arts-and-music-initiative-ballot-proposition-28-ballot'];
describe('Validate RECORDING ACADEMY PROD Google Anlytics', { tags: 'prod' }, function () {

  beforeEach(function () {
    cy.viewport(1400, 900)
    cy.fixture('config.json').as('cfg');
  })

  it('Open RECORDING ACADEMY prod Home Page', function () {
    cy.openRECORDINGACADEMYprodhomepage()
  })

  urls.forEach(url => {
    describe(`Loading URL and validade Google Analytics pageview function: ${url}`, () => {
      it('Validating RECORDING ACADEMY PROD Google Analytics', function () {
        cy.visit(url);
        cy.get('@ga')
          // ensure GA was created with our google analytics ID
          .should('be.calledWith', 'create', this.cfg.gaTrackerIdRECORDINGACADEMY)
          .and('be.calledWithMatch', /.+send/, 'pageview')
        cy.log('GA validated')
      })
      describe(`Validating GTM script on: ${url}`, () => {
        it('Validating GTM ', function () {
          cy.checkGTM("gtm")
          cy.log('GTM Validated')
        })
      })
    })
  })
})