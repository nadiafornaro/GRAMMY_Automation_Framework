describe('login', () => {
  it('Login on Vercel LGCF"', () => {
    cy.visit('https://www.latingrammyculturalfoundation.org/',{failOnStatusCode: false})
    cy.viewport(1400, 900)
    cy.get('input').type('EjlMB6OqSc13')
    cy.contains('Log in').click()
  })
})