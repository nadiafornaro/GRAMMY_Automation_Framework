/// <reference types="cypress-xpath" />

const newsarticles = ['https://www.musicares.org/news/theresa-wolters-vice-president-health-and-human-services-program-leader-elizabeth-glaser-pediatric-aids-foundation'
 
];


describe('Validate News Article details Page in MUSICARES PROD' ,{ tags: 'prod' }, function () {

    beforeEach(function () {
      cy.viewport(1400, 900)
      cy.fixture('config.json').as('cfg');
    })
  
    it('Open MUSICARES Home Page', function () {
    cy.visit('www.musicares.org')
    })

    
    newsarticles.forEach(url => {
    describe(`Loading News URL: ${url}`, () => {
    
      it('Validating News Article details thumbnail', function () {
        cy.visit(url)
        cy.wait(500);
        cy.get('[class*="relative article-photo-wrapper isolate"]').should('be.visible')
        cy.log('News Article details thumbnail validated')
      })

        it('Validating News Article details read list block ', function () {
          cy.get('ol > :nth-child(1) > .flex')
            .should('be.visible')
            .click()
            cy.get('ol > :nth-child(2) > .flex')
            .should('be.visible')
            .click()  
            cy.get('ol > :nth-child(3) > .flex')
            .should('be.visible')
            .click()  
            cy.get('ol > :nth-child(4) > .flex')
            .should('be.visible')
            .click()  
            cy.get('ol > :nth-child(5) > .flex')
            .should('be.visible')
            .click()  

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
  