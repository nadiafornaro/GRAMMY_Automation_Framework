/// <reference types="cypress-xpath" />

describe('Validate Videos Content in GRAMMY PROD', { tags: 'prod' }, function () {

    beforeEach(function () {
        cy.viewport(1400, 900)
        cy.fixture('config.json').as('cfg');
        cy.visit('https://www.grammy.com/videos')
    })

    describe('Start Videos page validation', { tags: 'prod' }, function () {
        it('Validate watch now button', function () {
            defaultCommandTimeout: 20000
            cy.xpath('//*[@id="__next"]/div/main/section/section[2]/div/div/a[1]/div/div/div/p')
                .should('have.text', 'WATCH NOW')
        })

        describe('Validate video hero carousel', { tags: 'prod' }, function () {
            it('Validate video hero carousel', function () {
                defaultCommandTimeout: 20000
                cy.get('.embla-series-video-carousel > .embla__container').should('be.visible')
                cy.log('Video Hero carousel validated')
            })
        })

        describe('Click on Latest video list content and make sure it opens correctly', { tags: 'prod' }, function () {
            it('Click on latest video list content and make sure it opens correctly', function () {
                defaultCommandTimeout: 20000
                for (let i = 1; i < 6; i++) {
                    cy.xpath(`//*[@id="__next"]/div/main/section/section[2]/div/div/a[${i}]`).click()
                    cy.get('.embla-related-video-carousel > .embla__container', { timeout: 20000 }).should('be.visible')
                    cy.log(`Related Videos carousel validated #${i}`)
                    cy.visit('https://www.grammy.com/videos')
                    cy.wait(2000)
                }
            })
        })
    })
})
