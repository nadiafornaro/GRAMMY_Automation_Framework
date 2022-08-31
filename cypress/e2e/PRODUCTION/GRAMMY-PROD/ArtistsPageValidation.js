/// <reference types="cypress-xpath" />

const urls = [
    'https://www.grammy.com/artists/Rauw-Alejandro/37876',
    'https://www.grammy.com/artists/Tems/38505',
    'https://live.grammy.com/artists/Cailin-Russo/38690', 
    'https://www.grammy.com/artists/Kenny-Siegal/39891',
    'https://www.grammy.com/artists/Chicago/8352',
    'https://www.grammy.com/artists/Alexander-23/37878',
    'https://www.grammy.com/artists/Marshall-Allen/37883',
    'https://www.grammy.com/artists/Allday/37880',
    'https://www.grammy.com/artists/Arooj-Aftab/37873', 
    'https://www.grammy.com/artists/Brittany-Amaradio/37886',
    'https://www.grammy.com/artists/Andy-Akiho/37874',
    'https://www.grammy.com/artists/Jimmie-Allen/37882',
    'https://www.grammy.com/artists/Amy-Andersson/37887',
    'https://www.grammy.com/artists/Snoh-Aalegra/37867', 
    'https://www.grammy.com/artists/Timo-Andres/37890',
    'https://www.grammy.com/artists/Clarice-Assad/37898',
    'https://www.grammy.com/artists/Roark-Bailey/37908',
    'https://www.grammy.com/artists/Louis-Andriessen/37891',
    'https://www.grammy.com/artists/Nate-Bargatze/37911', 
    'https://www.grammy.com/artists/Olafur-Arnalds/37896',
    'https://www.grammy.com/artists/Ape-Drums/37892',
    'https://www.grammy.com/artists/Thomas-Bartlett/37916',
    'https://www.grammy.com/artists/Emily-Bear/37925',
    'https://www.grammy.com/artists/Alfie-Boe/37940', 
    'https://www.grammy.com/artists/Jon-Bellion/37927',
    'https://www.grammy.com/artists/Dante-Bowe/37949',
    'https://www.grammy.com/artists/Conway-The-Machine/38000',
    'https://www.grammy.com/artists/Karen-Cargill/37981',
    'https://www.grammy.com/artists/Lucy-Crowe/38009',
    'https://www.grammy.com/artists/Zach-Cooper/38004',
    'https://www.grammy.com/artists/Amanda-Lindsey-Cook/38002',
    'https://www.grammy.com/artists/Kenyon-Dixon/38039',
    'https://www.grammy.com/artists/Simone-Dinnerstein/38037',
    'https://www.grammy.com/artists/Cody-Fry/38083',
    'https://www.grammy.com/artists/Agnetha-Faltskog/38066',
    'https://www.grammy.com/artists/Carrie-Hope-Fletcher/38076',
    'https://www.grammy.com/artists/Steffany-Gretzinger/38112',
    'https://www.grammy.com/artists/Selena-Gomez/38106',
    'https://www.grammy.com/artists/Brandon-Patrick-George/38094',
    'https://www.grammy.com/artists/Mak-Grgic/38113',
    'https://www.grammy.com/artists/Dhani-Harrison/38130',
    'https://www.grammy.com/artists/Walker-Hayes/38141',
    'https://www.grammy.com/artists/Ryan-Hurd/38161',
    'https://www.grammy.com/artists/Illenium/38165',
    'https://www.grammy.com/artists/Ronny-J/38172',
    'https://www.grammy.com/artists/Japanese-Breakfast/38180',
    'https://www.grammy.com/artists/Linden-Jay/38182',
    'https://www.grammy.com/artists/Nathan-Jess/38187',
    'https://www.grammy.com/artists/Valerie-June/38196',
    'https://www.grammy.com/artists/Karen-Kamensek/38200',
    'https://www.grammy.com/artists/Made-Kuti/38222',
    'https://www.grammy.com/artists/Jon-King/38217',
    'https://www.grammy.com/artists/Gamal-Lunchmoney-Lewis/38250',
    'https://www.grammy.com/artists/Will-Liverman/38256',
    'https://www.grammy.com/artists/Susanna-Malkki/38275',
    'https://www.grammy.com/artists/The-LOX/38261',
    'https://www.grammy.com/artists/James-McAlister/38289',
    'https://www.grammy.com/artists/Quavious-Keyate-Marshall/38280',
    'https://www.grammy.com/artists/Marshmello/38281',
    'https://www.grammy.com/artists/Masego/38284',
    'https://www.grammy.com/artists/Morray/38316',
    'https://www.grammy.com/artists/Nico-Muhly/38320',
    'https://www.grammy.com/artists/Emile-Mosseri/38317',
    'https://www.grammy.com/artists/Chandler-Moore/38309',
    'https://www.grammy.com/artists/Christopher-Otto/38353',
    'https://www.grammy.com/artists/Nathy-Peluso/38364',
    'https://www.grammy.com/artists/Kaspars-Putnins/38385',
    'https://www.grammy.com/artists/Arlo-Parks/38358',
    'https://www.grammy.com/artists/Karriem-Riggins/38400',
    'https://www.grammy.com/artists/Naomi-Raine/38389',
    'https://www.grammy.com/artists/Mike-Scribz-Riley/38401',
    'https://www.grammy.com/artists/Olivia-Rodrigo/38411',
    'https://www.grammy.com/artists/Amelia-Robinson/38406',
    'https://www.grammy.com/artists/Dan-Romer/38413',
    'https://www.grammy.com/artists/Allison-Russell/38426',
    'https://www.grammy.com/artists/Paul-Sanchez/38432',
    'https://www.grammy.com/artists/Jesse-Royal/38423',
    'https://www.grammy.com/artists/Corrado-Rovaris/38420',
    'https://www.grammy.com/artists/KJ-Scriven/38442',
    'https://www.grammy.com/artists/Chinsea-Lee/38450',
    'https://www.grammy.com/artists/Smino/38465',
    'https://www.grammy.com/artists/Alex-Sopp/38476',
    'https://www.grammy.com/artists/Laura-Strickling/38487',
    'https://www.grammy.com/artists/Caleb-Zackery-Toliver/38521',
    'https://www.grammy.com/artists/Aaron-Lee-Tasjan/38504',
    'https://www.grammy.com/artists/C--Tangana/38503',
    'https://www.grammy.com/artists/Totally-Enormous-Extinct-Dinosaurs/38524',
    'https://www.grammy.com/artists/Nick-Waterhouse/38549',
    'https://www.grammy.com/artists/Walshy-Fire/38544',
    'https://www.grammy.com/artists/Andrew-Lloyd-Webber/38551',
    'https://www.grammy.com/artists/Hailey-Whitters/38566',
    'https://www.grammy.com/artists/Brandee-Younger/38592',
    'https://www.grammy.com/artists/King-Garbage/38614',
    'https://www.grammy.com/artists/Youngboy-Never-Broke-Again/38591',
    'https://www.grammy.com/artists/Glass-Animals/38608',
    'https://www.grammy.com/artists/ABBA/38599',
    'https://www.grammy.com/artists/JACK-Quartet/38613',
    'https://www.grammy.com/artists/Keenon-Daequan-Ray-Jackson/38589',
    'https://www.grammy.com/artists/Diamante-Electrico/38605',
    'https://www.grammy.com/artists/Sandbox-Percussion/38632'
];


describe('Validate SiteUp and Running in GRAMMY PROD', { tags: 'prod' }, function () {

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
