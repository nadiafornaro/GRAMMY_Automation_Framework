/// <reference types="cypress-xpath" />

describe('Validate Search Functionality in GRAMMY PROD', { tags: 'prod' }, function () {

  var json = require('../../../fixtures/GrammyArtists.json')
  var artists = Object.values(json.artists)

  beforeEach(function () {
    cy.viewport(1400, 900)
    cy.fixture('config.json').as('cfg');
  })

  it('Open GRAMMY Home Page', function () {
    cy.openGRAMMYprodhomepage()
  })

  it('Click in search button', function () {
    cy.get('input[placeholder*="Search for a Year, Artist, Genre, etc."]').type(' ')
  })

  artists.forEach(artist => {
    describe(`Starting search for : ${artist}`, () => {
      it('Validate search elements on search page ', function () {
        defaultCommandTimeout: 20000
        cy.get('.form-node').type(artist)
        cy.wait(2000)
        cy.get('.max-w-960px > :nth-child(1) > .border-b').should('have.text', 'Artists') //validate artists column
        cy.log(`${artist} has artist column`)
        cy.get('.max-w-960px > :nth-child(2) > .border-b').should('have.text', 'News') //validate videos column
        cy.log(`${artist} has Videos column`)
        cy.get('.max-w-960px > :nth-child(3) > .border-b').should('have.text', 'Videos')  //validate news column
        cy.log(`${artist} has News column`)
        cy.get('.form-node').focus().clear();
        cy.get('.form-node').focus().clear();
        cy.log(`${artist} Validated`)
      })
    })
  })
})