/// <reference types="cypress-xpath" />

const artists = ['maluma',
  'taylor swift',
  'ariana grande',
  'jay z',
  'shakira',
  'BTS ',
  'Beyonce',
  'Demi Lovato',
  'Madonna',
  'Rihanna',
  'Britney Spears',
  'Christina Aguilera',
  'Dr. Dre',
  'Drake',
  'Justin Timberlake',
  'Justin Bieber',
  'Ed Sheeran',
  'P Diddy',
  'Pharrell Williams',
  'Will Smith',
  'Eminem',
  'Calvin Broadus',
  'Eric Clapton',
  'Kanye West',
  'Marilyn Manson',
  'Jennifer Lopez',
  'Alicia Keys',
  'Adele',
  'Harry Styles',
  'Selena Gomez',
  'Lizzo',
  'Kate Bush',
  'Steve Lacy',
  'Jack Harlow',
  'Doja Cat',
  'Bad Bunny',
  'OneRepublic',
  'Bon Jovi',
  'Lil Baby',
  'Dua Lipa',
  'YoungBoy Never Broke Again',
  'Cardi B',
  'Imagine Dragons',
  'Celine Dion',
  'Queen Latifah',
  'Elton John',
  'Freddie Mercury',
  'The Weeknd',
  'Kendrick Lamar',
  'Lady Gaga',
  'Billie Eilish',
  'AC/DC',
  'Travis Scott',
  'Post Malone',
  'Tyler, The Creator',
  'Michael Jackson',
  'Nirvana',
  'Lana Del Rey',
  'Bruno Mars',
  'Metallica',
  'Shania Twain',
  'Lil Nas X',
  'Chris Brown',
  'Foo Fighters',
  'Whitney Houston',
  'Kelly Rowland',
  'Frank Ocean',
  'The Beatles',
  'Katy Perry',
  '50 Cent',
];


describe('Validate Search Functionality in GRAMMY PROD', { tags: 'prod' }, function () {

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
        cy.get('.form-node').type(artist)
        cy.wait(2000)
        cy.get('.max-w-960px > :nth-child(1) > .border-b').should('have.text', 'Artists')//validate artists column
        cy.log(`${artist} has artist column`)
        cy.get('.max-w-960px > :nth-child(2) > .border-b').should('have.text', 'News') // validate videos column
        cy.log(`${artist} has Videos column`)
        cy.get('.max-w-960px > :nth-child(3) > .border-b').should('have.text', 'Videos')  // validate news column
        cy.log(`${artist} has News column`)
        cy.get('.form-node').focus().clear();
        cy.get('.form-node').focus().clear();
        cy.log(`${artist} Validated`)
      })
    })
  })
})