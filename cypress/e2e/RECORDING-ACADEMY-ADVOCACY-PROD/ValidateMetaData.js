describe('Validate MetaData Functionality in Recording Academy PROD', { tags: 'prod' }, function () {

    beforeEach(function () {
        cy.viewport(1400, 900)
        cy.fixture('config.json').as('cfg');
    })

    it('Open Recording Academy Advocacy Home Page', function () {
        cy.openRECORDINGACADEMYADVOCACYprodhomepage()
    })

    //confirm the meta tag description includes the expected text
    it('Confirm MetaData Description', function () {
        cy.get('head meta[name=description]')
            .should('have.attr', 'content')
            .should('include', "Music creators need an advocate in Washington, D.C. The Recording Academy fights tirelessly to champion creators’ rights, elevating important policy issues impacting our music community.")
    })
    
    //confirm the meta tag Twitter Card includes the expected text
    it('Confirm MetaData for Twitter Card', function () {
        cy.get('head meta[name="twitter:card"]')
            .should('have.attr', 'content')
            .should('include', "summary_large_image")
    })

    //confirm the meta tag Twitter Site includes the expected text
    it('Confirm MetaData for Twitter Site', function () {
        cy.get('head meta[name="twitter:site"]')
            .should('have.attr', 'content')
            .should('include', "@RecordingAcad")
    })

    //confirm the meta tag Twitter Site ID includes the expected text
    it('Confirm MetaData for Twitter Site ID', function () {
        cy.get('head meta[property="twitter:site:id"]')
            .should('have.attr', 'content')
            .should('include', "17243213")
    })

    //confirm the meta tag property og:title includes the expected text
    it('Confirm property og:title', function () {
        cy.get('head meta[property="og:title"]')
            .should('have.attr', 'content')
            .should('include', "Representing Music's Creators | RecordingAcademy.com")
    })

    //confirm the meta tag property og:description includes the expected text
    it('Confirm property og:description', function () {
        cy.get('head meta[property="og:description"]')
            .should('have.attr', 'content')
            .should('include', "Music creators need an advocate in Washington, D.C. The Recording Academy fights tirelessly to champion creators’ rights, elevating important policy issues impacting our music community.")
    })

    //confirm the meta tag property og:url includes the expected text
    it('Confirm property og:url', function () {
        cy.get('head meta[property="og:url"]')
            .should('have.attr', 'content')
            .should('include', 'https://recordingacademy.com/advocacy')
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
            .should('include', 'https://i8.amplience.net/i/naras/banner.default')
    })

    //confirm the meta tag property og:image:alt includes the expected text
    it('Confirm property og:image:alt', function () {
        cy.get('head meta[property="og:image:alt"]')
            .should('have.attr', 'content')
            .should('include', 'RecordingAcademy.com')
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
})
