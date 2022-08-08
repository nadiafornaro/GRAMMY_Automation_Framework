Cypress.on('window:before:load', (win) => {
  win.ga = cy.stub().as('ga')
})

const urls = ['https://develop-tra-recording-academy.vercel.app',
  'https://develop-tra-recording-academy.vercel.app/news',
  'https://develop-tra-recording-academy.vercel.app/news/grammy-museum-preferred-bank-li-yu-grace-donation',
  'https://develop-tra-recording-academy.vercel.app/membership',
  'https://develop-tra-recording-academy.vercel.app/awards/rules-guidelines',
  'https://develop-tra-recording-academy.vercel.app/about'];
describe('Validate RECORDING ACADEMY dev Google Anlytics', { tags: 'dev' }, function () {

  beforeEach(function () {
    cy.viewport(1400, 900)
    cy.fixture('config.json').as('cfg');
  })

  it('Open RECORDING ACADEMY dev Home Page', function () {
    cy.openRECORDINGACADEMYprodhomepage()
  })

  urls.forEach(url => {
    describe(`Loading URL and validade Google Analytics pageview function: ${url}`, () => {
      it('Validating RECORDING ACADEMY Google Analytics ', function () {
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