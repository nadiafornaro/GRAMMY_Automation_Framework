/// <reference types="cypress-xpath" />

const urls = [
  'https://www.musicares.org/',
  'https://www.musicares.org/donations',
  'https://www.musicares.org/about',
  'https://www.musicares.org/get-help',
  'https://www.musicares.org/news',
  'https://www.recordingacademy.com/advocacy/news',
  'https://www.musicares.org/events',
  'https://grammymuseumstore.com/pages/musicares?utm_source=musicares.org&utm_medium=referral',
  'https://www.musicares.org/person-year',
  'https://www.musicares.org/?form=donate'
];


describe('Validate SiteUp and Running in MusiCares PROD' ,{ tags: 'prod' }, function () {

    beforeEach(function () {
      cy.viewport(1400, 900)
      cy.fixture('config.json').as('cfg');
    })
    
    urls.forEach(url => {
    describe(`Loading URL: ${url}`, () => {
    
      it('Opening URL', function () {
        cy.visit(url)
        cy.wait(1000);
        cy.log('Validation Complete')
      })
  

    it('Validating URL is not returning server error and page could not be found', function () {
        cy.get('html:root').eq(0).should('not.have.value', 'Internal Server Error')
        cy.get('html:root').eq(0).should('not.have.value', 'This page could not be found.')
        cy.wait(500);
        cy.log('Validation Complete')
      })
    })
  })
})
  