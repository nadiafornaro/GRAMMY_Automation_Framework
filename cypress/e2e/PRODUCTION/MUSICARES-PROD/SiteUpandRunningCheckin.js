/// <reference types="cypress-xpath" />

var json = require('../../../fixtures/MusicaresUrls.json')
var urls = Object.values(json.urls)

describe('Validate SiteUp and Running in MusiCares PROD' ,{ tags: 'prod' }, function () {

    beforeEach(function () {
      cy.viewport(1400, 900)
      cy.fixture('config.json').as('cfg');
    })
    
    urls.forEach(url => {
    
      it(`Checking ${url}`, function () {
        cy.visit(url)
        cy.wait(1000);
        cy.log('Validation Complete')
        cy.get('html:root').eq(0).should('not.have.value', 'Internal Server Error')
        cy.get('html:root').eq(0).should('not.have.value', 'This page could not be found.')
        cy.wait(500);
        cy.log('Validation Complete')
      })
  
  })
})
  