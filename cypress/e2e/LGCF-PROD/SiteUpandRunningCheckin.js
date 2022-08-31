/// <reference types="cypress-xpath" />

const urls = [
  'https://www.latingrammyculturalfoundation.org/es',
  'https://www.latingrammyculturalfoundation.org/en',
  'https://www.latingrammyculturalfoundation.org/pt',
  'https://www.latingrammyculturalfoundation.org/es/about',
  'https://www.latingrammyculturalfoundation.org/es/about/leadership-staff',
  'https://www.latingrammyculturalfoundation.org/es/about/success-stories',
  'https://www.latingrammyculturalfoundation.org/es/about/supporters',
  'https://www.latingrammyculturalfoundation.org/es/what-we-do',
  'https://www.latingrammyculturalfoundation.org/es/what-we-do/scholarships',
  'https://www.latingrammyculturalfoundation.org/es/what-we-do/latin-music-research-and-preservation-grants',
  'https://www.latingrammyculturalfoundation.org/es/what-we-do/music-education-programs',
  'https://www.latingrammyculturalfoundation.org/es/news',
  'https://www.latingrammyculturalfoundation.org/es/contact-info',
  'https://www.latingrammyculturalfoundation.org/es/support',
  'https://www.latingrammyculturalfoundation.org/es/support/ways-to-donate',
  'https://www.latingrammyculturalfoundation.org/es/support/sponsorship-opportunities',
  'https://www.latingrammyculturalfoundation.org/es/support/artist-support',
  'https://www.latingrammyculturalfoundation.org/es/donate',
  'https://www.latingrammyculturalfoundation.org/en/about',
  'https://www.latingrammyculturalfoundation.org/en/about/leadership-staff',
  'https://www.latingrammyculturalfoundation.org/en/about/success-stories',
  'https://www.latingrammyculturalfoundation.org/en/about/supporters',
  'https://www.latingrammyculturalfoundation.org/en/what-we-do',
  'https://www.latingrammyculturalfoundation.org/en/what-we-do/scholarships',
  'https://www.latingrammyculturalfoundation.org/en/what-we-do/latin-music-research-and-preservation-grants',
  'https://www.latingrammyculturalfoundation.org/en/what-we-do/music-education-programs',
  'https://www.latingrammyculturalfoundation.org/en/news',
  'https://www.latingrammyculturalfoundation.org/en/contact-info',
  'https://www.latingrammyculturalfoundation.org/en/support',
  'https://www.latingrammyculturalfoundation.org/en/support/ways-to-donate',
  'https://www.latingrammyculturalfoundation.org/en/support/sponsorship-opportunities',
  'https://www.latingrammyculturalfoundation.org/en/support/artist-support',
  'https://www.latingrammyculturalfoundation.org/pt/about',
  'https://www.latingrammyculturalfoundation.org/pt/about/leadership-staff',
  'https://www.latingrammyculturalfoundation.org/pt/about/success-stories',
  'https://www.latingrammyculturalfoundation.org/pt/about/supporters',
  'https://www.latingrammyculturalfoundation.org/pt/what-we-do',
  'https://www.latingrammyculturalfoundation.org/pt/what-we-do/scholarships',
  'https://www.latingrammyculturalfoundation.org/pt/what-we-do/latin-music-research-and-preservation-grants',
  'https://www.latingrammyculturalfoundation.org/pt/what-we-do/music-education-programs',
  'https://www.latingrammyculturalfoundation.org/pt/news',
  'https://www.latingrammyculturalfoundation.org/pt/contact-info',
  'https://www.latingrammyculturalfoundation.org/pt/support',
  'https://www.latingrammyculturalfoundation.org/pt/support/ways-to-donate',
  'https://www.latingrammyculturalfoundation.org/pt/support/sponsorship-opportunities',
  'https://www.latingrammyculturalfoundation.org/pt/support/artist-support',
  'https://www.latingrammyculturalfoundation.org/pt/donate'
];


describe('Validate SiteUp and Running in LGCF PROD' ,{ tags: 'prod' }, function () {

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
  