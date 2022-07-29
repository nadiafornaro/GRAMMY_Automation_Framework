Cypress.on('window:before:load', (win) => {
  win.ga = cy.stub().as('ga')
})

const urls = ['https://www.grammy.com/',
'https://www.grammy.com/news', 
'https://www.grammy.com/news/5-rising-afrobeat-subgenres-and-artists-afroswing-ndombolo-afro-trap', 
'https://www.grammy.com/news/newport-folk-festival-2022-recap-taj-mahal-rhiannon-giddens-brandi-carlile-joni-mitchell-paul-simon', 
'https://grammy.com/videos', 
'https://grammy.com/videos/dylan-sinclair-kirk-franklin-hello-fear-cover-performance-reimagined-at-home', 
'https://www.grammy.com/music-genres', 
'https://www.grammy.com/music-genre/dance-electronic-music', 
'https://www.grammy.com/artists/maluma/251895', 
'https://www.grammy.com/music-genre/pop',
'https://www.grammy.com/music-genre/rock',
'https://www.grammy.com/music-genre/r-and-b',
'https://www.grammy.com/music-genre/country',
'https://www.grammy.com/music-genre/rap',
'https://www.grammy.com/music-genre/latin',
'https://www.grammy.com/music-genre/global-music',
'https://www.grammy.com/music-genre/gospel-contemporary-christian-music',
'https://www.grammy.com/music-genre/new-age',
'https://www.grammy.com/music-genre/jazz',
'https://www.grammy.com/music-genre/alternative',
'https://www.grammy.com/awards',
'https://www.grammy.com/artists/ariana-grande/18441'];
 
describe('Validate GRAMMY PROD Google Anlytics' , { tags: 'prod' }, function() {
  
    beforeEach(function() {
        cy.viewport(1400, 900)
        cy.fixture('config.json').as('cfg');
    })
   
    it('Open GRAMMY Home Page', function() {
      cy.openGRAMMYprodhomepage()
       })

       urls.forEach(url => {
        describe(`Loading URL and validade Google Analytics pageview function: ${url}`, () => {
       it('Validate GRAMMY PROD Google Anlytics ', function() {
       cy.visit(url);
       cy.wait(500);
          cy.get('@ga')
         // ensure GA was created with our google analytics ID
          .should('be.calledWith', 'create', this.cfg.gaTrackerIdGRAMMY)
          .and('be.calledWithMatch', /.+send/, 'pageview')
          cy.log('GA validated')
         })
       describe(`Validating GTM script on: ${url}`, () => {
          it('Validating GTM ', function() {
          cy.checkGTM("gtm")
          cy.log('GTM Validated')
            })
          })
        })
      })
})
