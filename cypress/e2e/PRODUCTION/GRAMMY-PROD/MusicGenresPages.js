/// <reference types="cypress-xpath" />

describe('Validate SiteUp and Running in GRAMMY PROD', { tags: 'prod' }, function () {

    var json = require('../../../fixtures/MusicGenresUrls.json')
    var urls = Object.values(json.urls)

    beforeEach(function () {
        cy.viewport(1400, 900)
        cy.fixture('config.json').as('cfg');
    })

    urls.forEach(url => {
        it(`Checking ${url}`, function () {
            cy.visit(url);
            cy.wait(2000);
            cy.get('html:root').eq(0).should('not.have.value', 'Internal Server Error')
            cy.wait(500);
            cy.log('Clicking on TOP button')
            cy.contains('button', 'TOP').click()
            cy.log('Validation Complete')     
        })
    })
})