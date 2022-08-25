/// <reference types="cypress-xpath" />

const urls = ['https://www.grammy.com/',
'https://develop-tra-grammy.vercel.app/news/panda-bear-reset-with-sonic-boom-mixes-hope-and-anxiety-60s-samples-animal-collective-spirit',
  'https://www.grammy.com/awards',
  'https://live.grammy.com/?utm_source=grammy.com&utm_medium=referral', 'https://www.grammy.com/music-genres', 
  'https://www.grammy.com/awards/64th-annual-grammy-awards-2021', 
  'https://grammymuseumstore.com/pages/grammy-awards',
  'https://www.grammy.com/awards/lifetime-achievement-awards',
  'https://www.grammy.com/awards',
  'https://www.grammy.com/awards/trustee-awards', 'https://www.grammy.com/awards/technical-awards', 
  'https://www.grammy.com/awards/music-educator-award', 
  'https://www.grammy.com/awards/hall-of-fame-award',
  'https://grammy.recordingacademy.com/awards/awards-journey',
  'https://www.recordingacademy.com/awards/rules-guidelines', 'https://www.recordingacademy.com/awards/voting-process', 
  'https://www.recordingacademy.com/awards/faq', 
  'https://www.grammy.com/news/marcus-king-pain-young-blood-new-song-album-performance-video-dan-auerbach-classic-rock-press-play-at-home',
  'https://www.grammy.com/music-genre/rock',
  'https://www.grammy.com/music-genre/r-and-b', 'https://www.grammy.com/music-genre/country', 
  'https://www.grammy.com/music-genre/rap', 
  'https://www.grammy.com/music-genre/latin',
  'https://www.grammy.com/music-genre/global-music',
  'https://www.grammy.com/music-genre/gospel-contemporary-christian-music', 'https://www.grammy.com/music-genre/new-age', 
  'https://www.grammy.com/music-genre/jazz', 
  'https://www.grammy.com/music-genre/alternative',
  'https://www.grammy.com/videos',
  'https://www.grammy.com/series-or-collection/press-play-grammys',
  'https://www.grammy.com/series-or-collection/reimagined-grammys',
  'https://www.grammy.com/series-or-collection/for-the-record-grammys',
  'https://www.grammy.com/series-or-collection/where-do-you-keep-your-grammy',
  'https://www.grammy.com/series-or-collection/behind-the-boards-grammys',
  'https://www.grammy.com/artists/maluma/251895',
  'https://www.grammy.com/artists/madonna/5068',
  'https://www.grammy.com/artists/bts/287749'
];


describe('Validate SiteUp and Runninh in GRAMMY PROD' ,{ tags: 'prod' }, function () {

    beforeEach(function () {
      cy.viewport(1400, 900)
      cy.fixture('config.json').as('cfg');
    })
    
    urls.forEach(url => {
    describe(`Loading URL: ${url}`, () => {
    
      it('Opening URL', function () {
        cy.visit(url)
        cy.wait(1000);
        cy.log('Validation Complete')
      })
  

    it('Validating URL is not returning server error', function () {
        cy.get('html:root').eq(0).should('not.have.value', 'Internal Server Error')
        cy.wait(500);
        cy.log('Validation Complete')
      })
    })
  })
})
  