Cypress.on('window:before:load', (win) => {
  win.ga = cy.stub().as('ga')
})

const urls = [
'https://www.latingrammy.com/es',
'https://www.latingrammy.com/es/photos',
'https://www.latingrammy.com/es/photos/latin-grammy-2',
'https://www.latingrammy.com/es/videos',
'https://www.latingrammy.com/es/videos/caetano-veloso-e-tom-veloso-grabaci-n-del-a-o',
'https://www.latingrammy.com/es/press',
'https://www.latingrammy.com/es/recording-academy/press-release/los-latin-grammys-regresan-a-las-vegas-0',
'https://www.latingrammy.com/es/patrocinadores',
'https://www.latingrammy.com/es/tipos-de-membresia',
'https://www.latingrammy.com/es/calendario-departamento-de-membres-a',
'https://www.latingrammy.com/es/preguntas-frecuentes-faq-',
'https://www.latingrammy.com/es/circulodeproductoreseingenieros',
'https://www.latingrammy.com/es/la-academia-latina-de-la-grabaci-n',
'https://www.latingrammy.com/es/t-rminos-y-condiciones',
'https://www.latingrammy.com/es/pol-tica-de-privacidad',
'https://www.latingrammy.com/es/cookie-policy',
'https://www.latingrammy.com/en/digital-millenium-copyright-act-notice',
'https://www.latingrammy.com/es/content/contacto',
'https://www.latingrammy.com/es/estatutos',
'https://www.latingrammy.com/es/la-academia-latina-de-la-grabaci-n',
'https://www.latingrammy.com/es/nominees',
'https://www.latingrammy.com/es/nominees',
'https://www.latingrammy.com/es/nominees/search',
'https://www.latingrammy.com/es/awards',
'https://www.latingrammy.com/es/calendario-departamento-de-premiaci-n',
'https://www.latingrammy.com/es/persona-del-a-o-de-la-academia-latina-de-la-grabaci-n',
'https://www.latingrammy.com/es/premios-especiales',
'https://www.latingrammy.com/es/leading-ladies-of-entertainment',
'https://www.latingrammy.com/es/sal-n-de-la-fama-del-latin-grammy',
'https://www.latingrammy.com/es/news',
'https://www.latingrammy.com/es/news/los-latin-grammys-regresan-a-las-vegas-0',
'https://www.latingrammy.com/en',
'https://www.latingrammy.com/en/the-latin-recording-academy',
'https://www.latingrammy.com/en/nominees',
'https://www.latingrammy.com/en/calendar-awards-department',
'https://www.latingrammy.com/en/nominees',
'https://www.latingrammy.com/en/nominees/search',
'https://www.latingrammy.com/en/awards',
'https://www.latingrammy.com/en/calendar-awards-department',
'https://www.latingrammy.com/en/latin-recording-academy-person-of-the-year-0',
'https://www.latingrammy.com/en/special-awards',
'https://www.latingrammy.com/en/leading-ladies-of-entertainment',
'https://www.latingrammy.com/en/latin-grammy-hall-of-fame',
'https://www.latingrammy.com/en/news',
'https://www.latingrammy.com/en/photos',
'https://www.latingrammy.com/en/videos',
'https://www.latingrammy.com/en/press',
'https://www.latingrammy.com/en/sponsors',
'https://www.latingrammy.com/en/membership-types',
'https://www.latingrammy.com/en/calendar-membership-department',
'https://www.latingrammy.com/en/faq',
'https://www.latingrammy.com/en/circle-of-producers-and-engineers',
'https://www.latingrammy.com/en/the-latin-recording-academy',
'https://www.latingrammy.com/pt',
'https://www.latingrammy.com/pt/a-academia-latina-da-grava-o',
'https://www.latingrammy.com/pt/nominees',
'https://www.latingrammy.com/pt/calend-rio-departamento-de-premia-o',
'https://www.latingrammy.com/pt/nominees',
'https://www.latingrammy.com/pt/nominees/search',
'https://www.latingrammy.com/pt/awards',
'https://www.latingrammy.com/pt/calend-rio-departamento-de-premia-o',
'https://www.latingrammy.com/pt/personalidade-do-ano-da-academia-latina-da-grava-o',
'https://www.latingrammy.com/pt/pr%C3%AAmios-especiais',
'https://www.latingrammy.com/pt/leading-ladies-of-entertainment',
'https://www.latingrammy.com/pt/hall-da-fama-do-latin-grammy',
'https://www.latingrammy.com/pt/news',
'https://www.latingrammy.com/pt/photos',
'https://www.latingrammy.com/pt/videos',
'https://www.latingrammy.com/pt/press',
'https://www.latingrammy.com/pt/patrocinadores',
'https://www.latingrammy.com/pt/tipos-de-afiliacao',
'https://www.latingrammy.com/pt/calend-rio-departamento-de-filia-o',
'https://www.latingrammy.com/pt/perguntas-frequentes-faq-',
'https://www.latingrammy.com/pt/c-rculo-de-produtores-e-engenheiros',
'https://www.latingrammy.com/pt/a-academia-latina-da-grava-o'
];

describe('Validate LATIN GRAMMY PROD Home Page', { tags: 'latingrammyprod' }, function () {

  beforeEach(function () {
    cy.viewport(1400, 900)
    cy.fixture('config.json').as('cfg');
  })

  it('Open LATIN GRAMMY Home Page', function () {
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