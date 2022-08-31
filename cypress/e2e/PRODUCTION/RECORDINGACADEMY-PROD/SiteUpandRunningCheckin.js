/// <reference types="cypress-xpath" />

const urls = [
  'https://www.recordingacademy.com/',
  'https://www.recordingacademy.com/about',
  'https://www.recordingacademy.com/membership', 
  'https://www.recordingacademy.com/news',
  'https://www.recordingacademy.com/press-room',
  'https://www.recordingacademy.com/press-room/press-kits',
  'https://www.recordingacademy.com/press-room/executives',
  'https://www.recordingacademy.com/press-room/trustees',
  'https://www.recordingacademy.com/press-room/in-memoriam',
  'https://www.recordingacademy.com/press-room/media-mailing-list',
  'https://www.recordingacademy.com/press-room/media-contacts',
  'https://www.recordingacademy.com/about',
  'https://www.recordingacademy.com/inclusion',
  'https://www.recordingacademy.com/inclusion/black-music-collective',
  'https://www.recordingacademy.com/inclusion/womensstudy',
  'https://www.recordingacademy.com/inclusion/inclusion-rider',
  'https://www.recordingacademy.com/jobs',
  'https://www.recordingacademy.com/membership/governance',
  'https://www.recordingacademy.com/producers-engineers-wing',
  'https://www.recordingacademy.com/producers-engineers-wing/leadership',
  'https://www.recordingacademy.com/producers-engineers-wing/technical-guidelines',
  'https://www.recordingacademy.com/songwriters-composers-wing',
  'https://forms.office.com/Pages/ResponsePage.aspx?id=TX5Mqie66kuc7Af-t85nLicIkLJaD4tFmwM68EROSxZUMlBaQTg0MThFV1lBVDlBSEEyVUwwTEpWMC4u',
  'https://www.recordingacademy.com/membership/grammy-u',
  'https://www.recordingacademy.com/membership/chapters/atlanta',
  'https://www.recordingacademy.com/membership/chapters/chicago',
  'https://www.recordingacademy.com/membership/chapters/florida',
  'https://www.recordingacademy.com/membership/chapters/los-angeles',
  'https://www.recordingacademy.com/membership/chapters/memphis',
  'https://www.recordingacademy.com/membership/chapters/nashville',
  'https://www.recordingacademy.com/membership/chapters/new-york',
  'https://www.recordingacademy.com/membership/chapters/pacific-northwest',
  'https://www.recordingacademy.com/membership/chapters/philadelphia',
  'https://www.recordingacademy.com/membership/chapters/san-francisco',
  'https://www.recordingacademy.com/membership/chapters/texas',
  'https://www.recordingacademy.com/membership/chapters/washington-dc',
  'https://www.recordingacademy.com/news',
  'https://www.recordingacademy.com/awards/rules-guidelines',
  'https://www.recordingacademy.com/awards/media-company-registration-and-online-entry-process-oep',
  'https://grammy.recordingacademy.com/awards/awards-journey',
  'https://www.recordingacademy.com/awards/voting-and-solicitation-guidelines',
  'https://www.recordingacademy.com/awards/voting-process',
  'https://www.recordingacademy.com/awards/awards-updates',
  'https://www.recordingacademy.com/awards/faq',
  'https://www.recordingacademy.com/awards/grammy-participation-certificates',
  'https://www.recordingacademy.com/awards/grammy-nominee-stickers',
  'https://www.recordingacademy.com/awards/exclusive-offer-grammy-nominees-tiffany-medallion-presentation-box'
];


describe('Validate SiteUp and Running in Recording Academy PROD' ,{ tags: 'prod' }, function () {

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
  