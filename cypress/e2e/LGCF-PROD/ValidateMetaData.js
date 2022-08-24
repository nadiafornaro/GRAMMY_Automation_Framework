describe('Validate MetaData Functionality in LGCF PROD', { tags: 'prod' }, function () {

    beforeEach(function () {
        cy.viewport(1400, 900)
        cy.fixture('config.json').as('cfg');
    })

    it('Open LGCF Home Page', function () {
        cy.openLGCFprodhomepage()
    })

    //confirm the meta tag description includes the expected text
    it('Confirm MetaData Description', function () {
        cy.get('head meta[name=description]')
            .should('have.attr', 'content')
            .should('include', "La Fundación Cultural Latin GRAMMY® es una organización benéfica 501(c)(3) establecida en 2014 por La Academia Latina de la Grabación®. Hemos donado más de $6.5 millones a estudiantes, escuelas, programas de música, musicólogos e investigadores alrededor del mundo con el apoyo de generosos donantes.")
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
            .should('include', "@LatinGRAMMYFdn")
    })

    //confirm the meta tag Twitter url includes the expected text
    it('Confirm MetaData for Twitter url', function () {
        cy.get('head meta[property="twitter:url"]')
            .should('have.attr', 'content')
            .should('include', "https://latingrammyculturalfoundation.org")
    })

    //confirm the meta tag Twitter url site id includes the expected text
    it('Confirm MetaData for Twitter site id', function () {
        cy.get('head meta[property="twitter:site:id"]')
            .should('have.attr', 'content')
            .should('include', "3166119501")
    })

    //confirm the meta tag property og:type includes the expected text
    it('Confirm property og:type', function () {
        cy.get('head meta[property="og:type"]')
            .should('have.attr', 'content')
            .should('include', 'website')
    })

    //confirm the meta tag property og:site_name includes the expected text
    it('Confirm property og:site_name', function () {
        cy.get('head meta[property="og:site_name"]')
            .should('have.attr', 'content')
            .should('include', 'LatinGrammyCulturalFoundation.org')
    })

    //confirm the meta tag property og:url includes the expected text
    it('Confirm property og:url', function () {
        cy.get('head meta[property="og:url"]')
            .should('have.attr', 'content')
            .should('include', 'https://www.latingrammyculturalfoundation.org/es')
    })
    
    //confirm the meta tag property og:title includes the expected text
    it('Confirm property og:title', function () {
        cy.get('head meta[property="og:title"]')
            .should('have.attr', 'content')
            .should('include', 'LGCF - Home Page')
    })

    //confirm the meta tag property og:description includes the expected text
    it('Confirm property og:description', function () {
        cy.get('head meta[property="og:description"]')
            .should('have.attr', 'content')
            .should('include', "La Fundación Cultural Latin GRAMMY® es una organización benéfica 501(c)(3) establecida en 2014 por La Academia Latina de la Grabación®. Hemos donado más de $6.5 millones a estudiantes, escuelas, programas de música, musicólogos e investigadores alrededor del mundo con el apoyo de generosos donantes.")
    })

    //confirm the meta tag property og:image includes the expected text
    it('Confirm property og:image', function () {
        cy.get('head meta[property="og:image"]')
            .should('have.attr', 'content')
            .should('include', 'https://i8.amplience.net/i/naras/LGCF_Preview_1200x630')
    })

    //confirm the meta tag property og:image:alt includes the expected text
    it('Confirm property og:image:alt', function () {
        cy.get('head meta[property="og:image:alt"]')
            .should('have.attr', 'content')
            .should('include', 'LGCF')
    })

    //confirm the meta tag property og:image:width includes the expected text
    it('Confirm property og:image:width', function () {
        cy.get('head meta[property="og:image:width"]')
            .should('have.attr', 'content')
            .should('include', '1200')
    })

    //confirm the meta tag property og:image:height includes the expected text
    it('Confirm property og:image:height', function () {
        cy.get('head meta[property="og:image:height"]')
            .should('have.attr', 'content')
            .should('include', '630')
    })

    //confirm the meta tag property og:image:type includes the expected text
    it('Confirm property og:image:type', function () {
        cy.get('head meta[property="og:image:type"]')
            .should('have.attr', 'content')
            .should('include', 'image/jpeg')
    })

    //confirm the meta tag name keywords includes the expected text
    it('Confirm MetaData for keywords', function () {
        cy.get('head meta[name="keywords"]')
            .should('have.attr', 'content')
            .should('include', "LatinGrammy, LatinGrammyCulturalFoundation, LGCF, Cultural Foundation")
    })

    //confirm the meta tag property site_name includes the expected text
    it('Confirm MetaData for site name', function () {
        cy.get('head meta[property="site_name"]')
            .should('have.attr', 'content')
            .should('include', "https://www.latingrammyculturalfoundation.org/es")
    })

})
