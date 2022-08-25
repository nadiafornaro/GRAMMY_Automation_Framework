describe('Validate MetaData Functionality in Musicares PROD', { tags: 'prod' }, function () {

    beforeEach(function () {
        cy.viewport(1400, 900)
        cy.fixture('config.json').as('cfg');
    })

    it('Open MusiCares Home Page', function () {
        cy.openMUSICARESprodhomepage()
    })

    //confirm the meta tag description includes the expected text
    it('Confirm MetaData Description', function () {
        cy.get('head meta[name=description]')
            .should('have.attr', 'content')
            .should('include', "MusiCares is a charity that has provided Millions in health, financial, and rehabilitation resources to music people in times of need by helping the humans behind music because music gives so much to the world")
    })

    //confirm the meta tag Twitter includes the expected text
    it('Confirm MetaData for Twitter', function () {
        cy.get('head meta[name="twitter:site"]')
            .should('have.attr', 'content')
            .should('include', "@MusiCares")
    })

    //confirm the meta tag Twitter Site ID includes the expected text
    it('Confirm MetaData for Twitter Site ID', function () {
        cy.get('head meta[property="twitter:site:id"]')
            .should('have.attr', 'content')
            .should('include', "214684028")
    })

    //confirm the meta tag property og:title includes the expected text
    it('Confirm property og:title', function () {
        cy.get('head meta[property="og:title"]')
            .should('have.attr', 'content')
            .should('include', 'MusiCares Home | MusiCares.org')
    })

    //confirm the meta tag property og:description includes the expected text
    it('Confirm property og:description', function () {
        cy.get('head meta[property="og:description"]')
            .should('have.attr', 'content')
            .should('include', "MusiCares is a charity that has provided Millions in health, financial, and rehabilitation resources to music people in times of need by helping the humans behind music because music gives so much to the world")
    })

    //confirm the meta tag property og:url includes the expected text
    it('Confirm property og:url', function () {
        cy.get('head meta[property="og:url"]')
            .should('have.attr', 'content')
            .should('include', 'https://musicares.org/')
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
            .should('include', 'https://i8.amplience.net/i/naras/mc_1880x1060_color_1')
    })

    //confirm the meta tag property og:image:alt includes the expected text
    it('Confirm property og:image:alt', function () {
        cy.get('head meta[property="og:image:alt"]')
            .should('have.attr', 'content')
            .should('include', 'MusiCares')
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
            .should('include', "MusiCares, Donations, Help, GRAMMY, Recording Academy")
    })

    //confirm the meta tag property site_name includes the expected text
    it('Confirm MetaData for site name', function () {
        cy.get('head meta[property="site_name"]')
            .should('have.attr', 'content')
            .should('include', "MusiCares.org")
    })

})
