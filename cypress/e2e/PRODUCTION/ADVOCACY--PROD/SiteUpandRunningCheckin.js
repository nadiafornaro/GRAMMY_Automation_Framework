/// <reference types="cypress-xpath" />

const urls = [
  'https://www.recordingacademy.com/advocacy',
  'https://www.recordingacademy.com/advocacy/about',
  'https://www.recordingacademy.com/advocacy/about/advocacy-milestones',
  'https://www.recordingacademy.com/advocacy/about/national-advocacy-committee',
  'https://www.recordingacademy.com/advocacy/about/publications',
  'https://www.recordingacademy.com/advocacy/news',
  'https://www.recordingacademy.com/advocacy/issues-policy',
  'https://www.recordingacademy.com/advocacy/issues-policy/music-modernization-act',
  'https://www.recordingacademy.com/advocacy/issues-policy/hits-act',
  'https://www.recordingacademy.com/advocacy/issues-policy/american-music-fairness-act',
  'https://www.recordingacademy.com/advocacy/issues-policy/performers',
  'https://www.recordingacademy.com/advocacy/issues-policy/songwriters',
  'https://www.recordingacademy.com/advocacy/issues-policy/studio-professionals',
  'https://www.recordingacademy.com/advocacy/issues-policy/policymakers'
];


describe('Validate SiteUp and Running in Advocacy PROD' ,{ tags: 'prod' }, function () {

    beforeEach(function () {
      cy.viewport(1400, 900)
      cy.fixture('config.json').as('cfg');
    })
    
    urls.forEach(url => {
    describe(`Loading URL: ${url}`, () => {
    
      it('Opening URL and validating URL there is neither server error nor page could not be found error', function () {
        cy.visit(url)
        cy.get('body').should('be.visible', {timeout: 10000})
        .then(()=>{
          cy.get('html:root').eq(0).should('not.have.value', 'Internal Server Error')
          cy.get('html:root').eq(0).should('not.have.value', 'This page could not be found.')
          cy.log('Validation Complete')
        })
      })
    })
  })
})
  