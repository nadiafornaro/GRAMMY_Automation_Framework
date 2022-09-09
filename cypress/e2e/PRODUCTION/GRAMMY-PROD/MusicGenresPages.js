/// <reference types="cypress-xpath" />

const urls = ['https://www.grammy.com/music-genre/rock',
  'https://www.grammy.com/music-genre/r-and-b', 'https://www.grammy.com/music-genre/country', 
  'https://www.grammy.com/music-genre/rap', 
  'https://www.grammy.com/music-genre/latin',
  'https://www.grammy.com/music-genre/global-music',
  'https://www.grammy.com/music-genre/gospel-contemporary-christian-music', 'https://www.grammy.com/music-genre/new-age', 
  'https://www.grammy.com/music-genre/jazz', 
  'https://www.grammy.com/music-genre/alternative'
];


describe('Validate SiteUp and Running in GRAMMY PROD' ,{ tags: 'prod' }, function () {

    beforeEach(function () {
      cy.viewport(1400, 900)
      cy.fixture('config.json').as('cfg');
    })
    
    urls.forEach(url => {
    describe(`Loading Music Genre URL: ${url}`, () => {
    
      it('Opening URL', function () {
        defaultCommandTimeout: 20000
        cy.visit(url)
        cy.wait(2000);
        cy.log('Validation Complete')
      })
  

    it(`Validating Music Genre URL ${url}`, () => {
        cy.get('html:root').eq(0).should('not.have.value', 'Internal Server Error')
        cy.wait(500);
        cy.log('Validation Complete')
      })

      it('Click on TOP button ', function () {
        cy.contains('button', 'TOP').click()
        cy.log('TOP button working as expect')
      })

    })
  })
})
  