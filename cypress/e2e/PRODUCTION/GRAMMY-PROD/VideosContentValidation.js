//const cypress = require("cypress");

describe('Validate Videos Content in GRAMMY PROD', { tags: 'prod' }, function () {

    beforeEach(function () {
        cy.viewport(1400, 900)
        cy.fixture('config.json').as('cfg');
        cy.visit('https://www.grammy.com/videos')
    })

    describe('Start Videos page validation', { tags: 'prod' }, function () {
    it('Validate watch now button', function () {
        defaultCommandTimeout: 20000
        cy.get('.relative > .flex > .text-base')
        .should('have.text','WATCH NOW')

    })

    describe('Validate video hero', { tags: 'prod' }, function () {
    it('Validate video hero', function () {
        defaultCommandTimeout: 20000
        cy.get('.embla-video-hero').should('be.visible')
        cy.log('Video Hero validated')
    })})

    describe('Click on videos hero list content and make sure it opens correctly', { tags: 'prod' }, function () {    
    it('Click on videos hero list content and make sure it opens correctly', function () {
        defaultCommandTimeout: 20000
        cy.get('.active > .h-full').click()
        cy.get('.relative > .flex > .text-base')
        .should('have.text','WATCH NOW')
        .click()
        cy.wait(400)
        cy.get('.ml-auto').should('be.visible')
        cy.log('Video player validated')
        cy.get('.embla-related-video-carousel').should('be.visible')
        cy.log('Related videos validated')

        cy.visit('https://www.grammy.com/videos')
        cy.wait(400)
        cy.get('.embla__container > :nth-child(2) > .h-full').click()
        cy.get('.relative > .flex > .text-base')
        .should('have.text','WATCH NOW')
        .click()
        cy.wait(400)
        cy.get('.ml-auto').should('be.visible')
        cy.log('Video player validated')
        cy.get('.embla-related-video-carousel').should('be.visible')
        cy.log('Related videos validated')

        cy.visit('https://www.grammy.com/videos')
        cy.wait(2000)
        cy.get('.embla__container > :nth-child(3) > .h-full').click()
        cy.get('.relative > .flex > .text-base')
        .should('have.text','WATCH NOW')
        .click()
        cy.wait(400)
        cy.get('.ml-auto').should('be.visible')
        cy.log('Video player validated')
        cy.get('.embla-related-video-carousel').should('be.visible')
        cy.log('Related videos validated')

      

        

        cy.visit('https://www.grammy.com/videos')
        cy.wait(2000)
        cy.get(':nth-child(4) > .h-full').click()
        cy.get('.relative > .flex > .text-base')
        .should('have.text','WATCH NOW')
        .click()
        cy.wait(2000)
        cy.get('.ml-auto').should('be.visible')
    })})

})

})
