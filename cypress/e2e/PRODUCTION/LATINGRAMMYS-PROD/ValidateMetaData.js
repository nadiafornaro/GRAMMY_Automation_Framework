describe('Validate MetaData Functionality in Latin Grammy PROD', { tags: 'prod' }, function () {

    beforeEach(function () {
        cy.viewport(1400, 900)
        cy.fixture('config.json').as('cfg');
    })

    it('Open LATIN GRAMMY Home Page', function () {
        cy.openLATINGRAMMYprodhomepage()
    })

    //confirm the meta tag description includes the expected text
    it('Confirm MetaData Description', function () {
        cy.get('head meta[name=description]')
            .should('have.attr', 'content')
            .should('include', "Únete a la conversación usando #LatinGRAMMY")
    })

    //confirm the meta tag Twitter card includes the expected text
    it('Confirm MetaData for Twitter card', function () {
        cy.get('head meta[name="twitter:card"]')
            .should('have.attr', 'content')
            .should('include', "summary_large_image")
    })

    //confirm the meta tag Twitter card includes the expected text
    it('Confirm MetaData for Twitter site', function () {
        cy.get('head meta[name="twitter:site"]')
            .should('have.attr', 'content')
            .should('include', "@LatinGRAMMYs")
    })

    //confirm the meta tag Twitter site id includes the expected text
    it('Confirm MetaData for Twitter', function () {
        cy.get('head meta[name="twitter:site:id"]')
            .should('have.attr', 'content')
            .should('include', "41221076")
    })

    //confirm the meta tag Twitter Site ID includes the expected text
    it('Confirm MetaData for Twitter Creator', function () {
        cy.get('head meta[name="twitter:creator"]')
            .should('have.attr', 'content')
            .should('include', "@LatinGRAMMYs")
    })

    //confirm the meta tag Twitter Site Creator ID includes the expected text
    it('Confirm MetaData for Twitter Creator', function () {
        cy.get('head meta[name="twitter:creator:id"]')
            .should('have.attr', 'content')
            .should('include', "41221076")
    })

    //confirm the meta tag Twitter url includes the expected text
    it('Confirm MetaData for Twitter url', function () {
        cy.get('head meta[name="twitter:url"]')
            .should('have.attr', 'content')
            .should('include', "https://www.latingrammy.com/es/home")
    })

    //confirm the meta tag Twitter Title includes the expected text
    it('Confirm MetaData for Twitter Title', function () {
        cy.get('head meta[name="twitter:title"]')
            .should('have.attr', 'content')
            .should('include', "Latin GRAMMYs")
    })

    //confirm the meta tag Twitter Description includes the expected text
    it('Confirm MetaData for Twitter Description', function () {
        cy.get('head meta[name="twitter:description"]')
            .should('have.attr', 'content')
            .should('include', "Únete a la conversación usando #LatinGRAMMY")
    })

    //confirm the meta tag Twitter Description includes the expected text
    it('Confirm MetaData for Twitter Description', function () {
        cy.get('head meta[name="twitter:image"]')
            .should('have.attr', 'content')
            .should('include', "https://www.latingrammy.com/files/thumbnail_2022_sm_preview_2022_22.png")
    })
    
    //confirm the meta tag Twitter Image Width includes the expected text
    it('Confirm MetaData for Twitter Image Width', function () {
        cy.get('head meta[name="twitter:image:width"]')
            .should('have.attr', 'content')
            .should('include', "1110")
    })

    //confirm the meta tag Twitter Image height includes the expected text
    it('Confirm MetaData for Twitter Image height', function () {
        cy.get('head meta[name="twitter:image:height"]')
            .should('have.attr', 'content')
            .should('include', "500")
    })

    //confirm the meta tag property og:title includes the expected text
    it('Confirm property og:title', function () {
        cy.get('head meta[property="og:title"]')
            .should('have.attr', 'content')
            .should('include', 'Latin GRAMMYs')
    })

    //confirm the meta tag property og:description includes the expected text
    it('Confirm property og:description', function () {
        cy.get('head meta[property="og:description"]')
            .should('have.attr', 'content')
            .should('include', "Únete a la conversación usando #LatinGRAMMY")
    })

    //confirm the meta tag property og:url includes the expected text
    it('Confirm property og:url', function () {
        cy.get('head meta[property="og:url"]')
            .should('have.attr', 'content')
            .should('include', 'https://www.latingrammy.com/es')
    })

    //confirm the meta tag property og:type includes the expected text
    it('Confirm property og:type', function () {
        cy.get('head meta[property="og:type"]')
            .should('have.attr', 'content')
            .should('include', 'website')
    })

    //confirm the meta tag property og:image includes the expected text
    it('Confirm property og:image', function () {
        cy.get('head meta[property="og:image"]')
            .should('have.attr', 'content')
            .should('include', 'https://www.latingrammy.com/files/thumbnail_2022_sm_preview_2022_22.png')
    })

    //confirm the meta tag property og site_name includes the expected text
    it('Confirm MetaData for site name', function () {
        cy.get('head meta[property="og:site_name"]')
            .should('have.attr', 'content')
            .should('include', "Latin GRAMMYs")
    })

})
