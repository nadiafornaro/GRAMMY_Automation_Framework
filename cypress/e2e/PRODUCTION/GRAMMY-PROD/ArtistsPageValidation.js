/// <reference types="cypress-xpath" />

describe('Validate SiteUp and Running in GRAMMY PROD', { tags: 'prod' }, function () {

    var json = require('../../../fixtures/ArtistsPageUrls.json')
    var urls = Object.values(json.urls)

    beforeEach(function () {
        cy.viewport(1400, 900)
        cy.fixture('config.json').as('cfg');
    })

    urls.forEach(url => {
        it(`Checking ${url}`, function () {
            cy.visit(url)
            cy.wait(1000);
            cy.get('html:root').eq(0).should('not.have.value', 'Internal Server Error')
            cy.get('html:root').eq(0).should('not.have.value', 'This page could not be found.')
            cy.wait(500);
            cy.log('Validation Complete')
        })
    })
})
