/// <reference types="cypress-xpath" />

describe('Validate SiteUp and Running in Record Academy PROD', { tags: 'prod' }, function () {
  beforeEach(function () {
    cy.viewport(1400, 900)

  })
  describe('Validate SiteUp and Running in Record Academy PROD', { tags: 'prod' }, function () {
    it('Opening URLs', function () {
      cy.fixture('config.json').as('cfg');
      cy.fixture('RecordAcademyUrls').as('urls');
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

  describe('Validate SiteUp and Running in Record Academy Forms PROD', { tags: 'prod' }, function () {
    it('Opening URLs', function () {
      cy.fixture('config.json').as('cfg');
      cy.fixture('RecordAcademyUrls').as('forms');
      cy.get('@forms').then((json) => {
        for (let i = 0; i < json.forms.length; i++) {
          cy.visit(json.forms[i])
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
