Cypress.on('window:before:load', (win) => {
  win.ga = cy.stub().as('ga')
})

const urls = ['https://www.latingrammyculturalfoundation.org/es/about', 
  'https://www.latingrammyculturalfoundation.org/es',
  'https://www.latingrammyculturalfoundation.org/en',
  'https://www.latingrammyculturalfoundation.org/pt',
  'https://www.latingrammyculturalfoundation.org/es/news/fundacao-cultural-latin-grammy-ganha-com--a-venda-de-ingressos-para-a-proxima-turne-de-camilo',
  'https://www.latingrammyculturalfoundation.org/es/news',
  'https://www.latingrammyculturalfoundation.org/pt/news',
  'https://www.latingrammyculturalfoundation.org/en/news/fundacao-cultural-latin-grammy-ganha-com--a-venda-de-ingressos-para-a-proxima-turne-de-camilo',
  'https://www.latingrammyculturalfoundation.org/pt/news/fundacao-cultural-latin-grammy-ganha-com--a-venda-de-ingressos-para-a-proxima-turne-de-camilo',
  'https://www.latingrammyculturalfoundation.org/en/about',
  'https://www.latingrammyculturalfoundation.org/es/about',
  'https://www.latingrammyculturalfoundation.org/pt/about',
  'https://www.latingrammyculturalfoundation.org/pt/what-we-do',
  'https://www.latingrammyculturalfoundation.org/en/what-we-do',
  'https://www.latingrammyculturalfoundation.org/es/about/leadership-staff',
  'https://www.latingrammyculturalfoundation.org/es/about/success-stories',
  'https://www.latingrammyculturalfoundation.org/es/about/supporters',
  'https://www.latingrammyculturalfoundation.org/es/what-we-do',
  'https://www.latingrammyculturalfoundation.org/es/what-we-do/scholarships',
  'https://www.latingrammyculturalfoundation.org/es/what-we-do/latin-music-research-and-preservation-grants',
  'https://www.latingrammyculturalfoundation.org/es/what-we-do/music-education-programs',
  'https://www.latingrammyculturalfoundation.org/es/support',
  'https://www.latingrammyculturalfoundation.org/es/support/ways-to-donate',
  'https://www.latingrammyculturalfoundation.org/es/support/sponsorship-opportunities',
  'https://www.latingrammyculturalfoundation.org/es/support/artist-support',
  'https://www.latingrammyculturalfoundation.org/es/donate',
  'https://www.latingrammyculturalfoundation.org/en/about/leadership-staff',
  'https://www.latingrammyculturalfoundation.org/en/about/success-stories',
  'https://www.latingrammyculturalfoundation.org/en/about/supporters',
  'https://www.latingrammyculturalfoundation.org/en/what-we-do/scholarships',
  'https://www.latingrammyculturalfoundation.org/en/what-we-do/latin-music-research-and-preservation-grants',
  'https://www.latingrammyculturalfoundation.org/en/what-we-do/music-education-programs',
  'https://www.latingrammyculturalfoundation.org/en/support/ways-to-donate',
  'https://www.latingrammyculturalfoundation.org/en/support/sponsorship-opportunities',
  'https://www.latingrammyculturalfoundation.org/en/support/artist-support',
  'https://www.latingrammyculturalfoundation.org/en/donate',
  'https://www.latingrammyculturalfoundation.org/pt/about/leadership-staff',
  'https://www.latingrammyculturalfoundation.org/pt/about/success-stories',
  'https://www.latingrammyculturalfoundation.org/pt/about/supporters',
  'https://www.latingrammyculturalfoundation.org/pt/what-we-do/scholarships',
  'https://www.latingrammyculturalfoundation.org/pt/what-we-do/latin-music-research-and-preservation-grants',
  'https://www.latingrammyculturalfoundation.org/pt/what-we-do/music-education-programs',
  'https://www.latingrammyculturalfoundation.org/pt/support/ways-to-donate',
  'https://www.latingrammyculturalfoundation.org/pt/support/sponsorship-opportunities',
  'https://www.latingrammyculturalfoundation.org/pt/support/artist-support',
  'https://www.latingrammyculturalfoundation.org/pt/donate'
];
describe('Validate LGCF Google Anlytics', { tags: 'LGCF' }, function () {

  beforeEach(function () {
    cy.viewport(1400, 900)
    cy.fixture('config.json').as('cfg');
  })

  it('Open LGCF Home Page', function () {
    cy.openLGCFprodhomepage()

    cy.get('@ga')
      // ensure GA was created with our google analytics ID
      .should('be.calledWith', 'create', this.cfg.gaTrackerIdLGCF)
      .and('be.calledWithMatch', /.+send/, 'pageview')
    cy.log('GA validated')
  })

  urls.forEach(url => {
    describe(`Loading URL and validade Google Analytics pageview function: ${url}`, () => {
      it('Validating Google Analytics in LGCF ', function () {
        cy.visit(url);
        cy.wait(500)
        cy.get('@ga')
          // ensure GA was created with our google analytics ID
          .should('be.calledWith', 'create', this.cfg.gaTrackerIdLGCF)
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