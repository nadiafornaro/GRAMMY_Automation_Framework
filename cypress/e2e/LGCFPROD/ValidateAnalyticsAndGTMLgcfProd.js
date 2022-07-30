Cypress.on('window:before:load', (win) => {
  win.ga = cy.stub().as('ga')
})

const urls = ['https://www.latingrammyculturalfoundation.org/es/about', 'https://www.latingrammyculturalfoundation.org/es', 
'https://www.latingrammyculturalfoundation.org/en', 
'https://www.latingrammyculturalfoundation.org/pt', 
'https://www.latingrammyculturalfoundation.org/es/news/fundacao-cultural-latin-grammy-ganha-com--a-venda-de-ingressos-para-a-proxima-turne-de-camilo', 
'https://www.latingrammyculturalfoundation.org/es/news', 
'https://www.latingrammyculturalfoundation.org/pt/news', 
'https://www.latingrammyculturalfoundation.org/en/news/fundacao-cultural-latin-grammy-ganha-com--a-venda-de-ingressos-para-a-proxima-turne-de-camilo', 
'https://www.latingrammyculturalfoundation.org/pt/news/fundacao-cultural-latin-grammy-ganha-com--a-venda-de-ingressos-para-a-proxima-turne-de-camilo', 
'https://www.latingrammyculturalfoundation.org/en/about',
'https://www.latingrammyculturalfoundation.org/es/about', 
'https://www.latingrammyculturalfoundation.org/pt/about', 
'https://www.latingrammyculturalfoundation.org/pt/what-we-do', 
'https://www.latingrammyculturalfoundation.org/en/what-we-do'];
describe('Validate LGCF Google Anlytics' , { tags: 'LGCF' }, function() {
  
    beforeEach(function() {
        cy.viewport(1400, 900)
        cy.fixture('config.json').as('cfg');
    })
   
    it('Open LGCF Home Page', function() {
      cy.openLGCFprodhomepage()

          cy.get('@ga')
         // ensure GA was created with our google analytics ID
          .should('be.calledWith', 'create', this.cfg.gaTrackerIdLGCF)
          .and('be.calledWithMatch', /.+send/, 'pageview')
          cy.log('GA validated')
       })

       urls.forEach(url => {
        describe(`Loading URL and validade Google Analytics pageview function: ${url}`, () => {
       it('Validating Google Analytics in LGCF ', function() {
        cy.visit(url);
        cy.wait(500)
          cy.get('@ga')
         // ensure GA was created with our google analytics ID
          .should('be.calledWith', 'create', this.cfg.gaTrackerIdLGCF)
          .and('be.calledWithMatch', /.+send/, 'pageview')
          cy.log('GA validated')
         })
       describe(`Validating GTM script on: ${url}`, () => {
          it('Validating GTM ', function() {
          cy.checkGTM("gtm")
          cy.log('GTM Validated')
            })
          })
        })
      })
})


