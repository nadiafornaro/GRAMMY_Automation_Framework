Cypress.on('window:before:load', (win) => {
  win.ga = cy.stub().as('ga')
})

const urls = ['https://dev-lra-grammy.vercel.app/es',
'https://dev-lra-grammy.vercel.app/es/about',
'https://dev-lra-grammy.vercel.app/es/about/leadership-staff',
'https://dev-lra-grammy.vercel.app/es/about/success-stories',
'https://dev-lra-grammy.vercel.app/es/about/supporters',
'https://dev-lra-grammy.vercel.app/es/lg-music-news',
'https://dev-lra-grammy.vercel.app/es/lg-latin-grammy-awards-landing-page',
'https://dev-lra-grammy.vercel.app/en',
'https://dev-lra-grammy.vercel.app/en/lg-about',
'https://dev-lra-grammy.vercel.app/en/lg-latin-grammy-awards-landing-page',
'https://dev-lra-grammy.vercel.app/en/lg-music-news',
'https://dev-lra-grammy.vercel.app/en/videos',
'https://dev-lra-grammy.vercel.app/en/photos',
'https://dev-lra-grammy.vercel.app/pt/lg-about',
'https://www.latingrammy.com/pt/press',
'https://www.latingrammy.com/pt/equipe-de-lideran-a-da-academia-latina-da-grava-o',
'https://www.latingrammy.com/pt/governan-a',
'https://dev-lra-grammy.vercel.app/pt/lg-latin-grammy-awards-landing-page',
'https://dev-lra-grammy.vercel.app/pt/lg-music-news',
'https://dev-lra-grammy.vercel.app/pt/videos',
'https://dev-lra-grammy.vercel.app/pt/photos'
];

describe('Validate LATIN GRAMMY DEV Home Page', { tags: 'latingrammydev' }, function () {

  beforeEach(function () {
    cy.viewport(1400, 900)
    cy.fixture('config.json').as('cfg');
  })

  it('Open LATIN GRAMMY DEV Home Page', function () {
    cy.openLATINGRAMMYdevhomepage()
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