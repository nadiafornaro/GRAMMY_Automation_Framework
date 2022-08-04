Cypress.on('window:before:load', (win) => {
  win.ga = cy.stub().as('ga')
})

const urls = ['https://develop-tra-grammy.vercel.app/news', 
'https://develop-tra-grammy.vercel.app/news/5-rising-afrobeat-subgenres-and-artists-afroswing-ndombolo-afro-trap', 
'https://develop-tra-grammy.vercel.app/news/newport-folk-festival-2022-recap-taj-mahal-rhiannon-giddens-brandi-carlile-joni-mitchell-paul-simon', 
'https://develop-tra-grammy.vercel.app/videos',
'https://develop-tra-grammy.vercel.app/series-or-collection/press-play-grammys',
'https://develop-tra-grammy.vercel.app/series-or-collection/reimagined-grammys',
'https://develop-tra-grammy.vercel.app/series-or-collection/for-the-record-grammys',
'https://develop-tra-grammy.vercel.app/series-or-collection/global-spin-grammys',
'https://develop-tra-grammy.vercel.app/series-or-collection/where-do-you-keep-your-grammy',
'https://develop-tra-grammy.vercel.app/series-or-collection/grammy-rewind-grammys',
'https://develop-tra-grammy.vercel.app/series-or-collection/behind-the-boards-grammys',
'https://develop-tra-grammy.vercel.app/series-or-collection/herbal-tea-white-sofas-grammys',
'https://develop-tra-grammy.vercel.app/videos/dylan-sinclair-kirk-franklin-hello-fear-cover-performance-reimagined-at-home', 
'https://develop-tra-grammy.vercel.app/music-genres', 
'https://develop-tra-grammy.vercel.app/artists/maluma/251895', 
'https://develop-tra-grammy.vercel.app/music-genre/pop'
];
describe('Validate GRAMMY DEV Google Anlytics', { tags: 'dev' }, function () {

  beforeEach(function () {
    cy.viewport(1400, 900)
    cy.fixture('config.json').as('cfg');
  })

  it('Open GRAMMY Home Page', function () {
    cy.openGRAMMYdevhomepage()
  })

  urls.forEach(url => {
    describe(`Loading URL and validade Google Analytics pageview function: ${url}`, () => {
      it('Validate GRAMMY DEV Google Anlytics ', function () {
        cy.visit(url);
        cy.get('@ga')
          // ensure GA was created with our google analytics ID
          .should('be.calledWith', 'create', this.cfg.gaTrackerIdGRAMMY)
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