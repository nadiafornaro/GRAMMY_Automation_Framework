/// <reference types="cypress-xpath" />

describe('Validate SiteUp and Running in GRAMMY PROD', { tags: 'prod' }, function () {
  beforeEach(function () {
    cy.viewport(1400, 900)

  })
  describe('Validate SiteUp and Running in GRAMMY PROD', { tags: 'prod' }, function () {
    it('Opening URLs', function () {
      cy.fixture('config.json').as('cfg');
      cy.fixture('GrammyUrls').as('urls');
      cy.get('@urls').then((json) => {
        for (let i = 0; i < json.urls.length; i++) {
          cy.visit(json.urls[i])
          cy.wait(1000);
          cy.log('Validation Complete')
          cy.get('html:root').eq(0).should('not.have.value', 'Internal Server Error')
          cy.get('html:root').eq(0).should('not.have.value', 'This page could not be found.')
          cy.wait(500);
        }
      })
    });
  })

  describe('Validate SiteUp and Running in GRAMMY Museum Store PROD', { tags: 'prod' }, function () {
    it('Opening URLs', function () {
      cy.fixture('config.json').as('cfg');
      cy.fixture('GrammyUrls').as('museumStore');
      cy.get('@museumStore').then((json) => {
        for (let i = 0; i < json.museumStore.length; i++) {
          cy.visit(json.museumStore[i])
          cy.wait(1000);
          cy.log('Validation Complete')
          cy.get('html:root').eq(0).should('not.have.value', 'Internal Server Error')
          cy.get('html:root').eq(0).should('not.have.value', 'This page could not be found.')
          cy.wait(500);
        }
      })
    });
  })
})
