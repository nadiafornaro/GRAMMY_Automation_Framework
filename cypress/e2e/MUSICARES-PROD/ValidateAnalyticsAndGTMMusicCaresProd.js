Cypress.on('window:before:load', (win) => {
  win.ga = cy.stub().as('ga')
})

const urls = ['https://www.musicares.org/',
  'https://www.musicares.org/donations',
  'https://www.musicares.org/about',
  'https://www.musicares.org/get-help',
  'https://www.musicares.org/news',
  'https://www.musicares.org/events',
  'https://www.musicares.org/person-year',
  'https://www.musicares.org/news/programs-virtual-events-july-2022-support-groups-clinics-screenings-yoga-workshop',
  'https://www.musicares.org/bio/renee-fabian',
  'https://www.musicares.org/news/prescribed-music-british-health-secretary-supports-arts-doctors-orders'];
describe('Validate MUSICARES PROD Google Anlytics', { tags: 'prod' }, function () {

  beforeEach(function () {
    cy.viewport(1400, 900)
    cy.fixture('config.json').as('cfg');
  })

  it('Open MUSICARES prod Home Page', function () {
    cy.openMUSICARESprodhomepage()
  })

  urls.forEach(url => {
    describe(`Loading URL and validade Google Analytics pageview function: ${url}`, () => {
      it('Validating Google Analytics in MUSICARES PROD ', function () {
        cy.visit(url);
        cy.get('@ga')
          // ensure GA was created with our google analytics ID
          .should('be.calledWith', 'create', this.cfg.gaTrackerIdMUSICARES)
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