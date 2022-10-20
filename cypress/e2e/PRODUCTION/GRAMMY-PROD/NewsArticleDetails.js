/// <reference types="cypress-xpath" />

describe('Validate News Landing Page in GRAMMY PROD', { tags: 'prod' }, function () {

  var json = require('../../../fixtures/NewsArticlesGrammyUrls.json')
  var urls = Object.values(json.urls)

  beforeEach(function () {
    cy.viewport(1400, 900)
    cy.fixture('config.json').as('cfg');
  })

  urls.forEach(url => {
    describe(`Loading News URL: ${url}`, () => {

      it('Validating News Article details thumbnail', function () {
        cy.visit(url)
        cy.wait(2000);
        cy.get('[class*="relative article-photo-wrapper isolate"]').should('be.visible')
        cy.log('News Article details thumbnail validated')
      })

      it('Validating News Article details read list block ', function () {
        for (let i = 1; i < 6; i++) {
          cy.get(`ol > :nth-child(${i}) > .flex`)
            .should('be.visible')
            .click()
        }

        cy.log('Read list block is visible and automation is able to navigate through it')

      })

      it('Click on Read More button ', function () {
        cy.contains('button', 'Read More').click()
        cy.log('Read More button is visible and clickable')
      })

      it('Validating News article text', function () {
        //news article text validation
        cy.get('[class*="w-full"]')
          .invoke('text').should('have.length.gt', 0)
        cy.log(' News article text validated')

      })

      it('Click on TOP button ', function () {
        cy.contains('button', 'TOP').click()
        cy.log('TOP button working as expect')
      })

      it('Validate Social icons ', function () {
        cy.get('[class*="mb-6"]').should('be.visible')

      })

    })
  })

})
