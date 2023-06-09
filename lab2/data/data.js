const data = {
   website: 'Putovanja',
   categories: [
      {
         id: 1,
         name: 'Dvorci',
         image: '1-neuschwanstein.jpg',
         products: [
            {
               name: 'Bran, Rumunjska',
               image: '1-bran.jpg',
               price: 120,
               id: 1,
            },
            {
               name: 'Chambord, Francuska',
               image: '1-chambord.jpg',
               price: 160,
               id: 2,
            },
            { name: 'Himeji, Japan', image: '1-himeji.jpg', price: 740, id: 3 },
            {
               name: 'Neuschwanstein, Njemačka',
               image: '1-neuschwanstein.jpg',
               price: 150,
               id: 4,
            },
            {
               name: 'Versailles, Francuska',
               image: '1-versailles.jpg',
               price: 160,
               id: 5,
            },
         ],
      },
      {
         id: 2,
         name: 'Svetišta i hodočasnička odredišta',
         image: '2-vatican.jpg',
         products: [
            {
               name: 'Altötting, Njemačka',
               image: '2-altotting.jpg',
               price: 120,
               id: 6,
            },
            {
               name: 'Asiz, Italija',
               image: '2-asiz.jpg',
               price: 180,
               id: 7,
            },
            {
               name: 'Fátima, Portugal',
               image: '2-fatima.jpg',
               price: 220,
               id: 8,
            },
            {
               name: 'Bazilika sv. Petra, Vatikan',
               image: '2-vatican.jpg',
               price: 130,
               id: 9,
            },
            {
               name: 'Lourdes, Francuska',
               image: '2-lourdes.jpg',
               price: 150,
               id: 10,
            },
         ],
      },
      {
         id: 3,
         name: 'Veliki gradovi',
         image: '3-nyc.jpg',
         products: [
            {
               name: 'New York City, New York',
               image: '3-nyc.jpg',
               price: 680,
               id: 11,
            },
            {
               name: 'London, Ujedinjeno Kraljevstvo',
               image: '3-london.jpg',
               price: 590,
               id: 12,
            },
            {
               name: 'Pariz, Francuska',
               image: '3-paris.jpg',
               price: 400,
               id: 13,
            },
            {
               name: 'Sydney, Australija',
               image: '3-sydney.jpg',
               price: 800,
               id: 14,
            },
            {
               name: 'Tokio, Japan',
               image: '3-tokyo.jpg',
               price: 750,
               id: 15,
            },
         ],
      },
      {
         id: 4,
         name: 'Gradovi u Hrvatskoj',
         image: '4-split.jpg',
         products: [
            {
               name: 'Osijek, Osječko-baranjska županija',
               image: '4-osijek.jpg',
               price: 70,
               id: 16,
            },
            {
               name: 'Split, Splitsko-dalmatinska županija',
               image: '4-split.jpg',
               price: 85,
               id: 17,
            },
            {
               name: 'Zadar, Zadarska županija',
               image: '4-zadar.jpg',
               price: 80,
               id: 18,
            },
            {
               name: 'Rijeka, Primorsko-goranska županija',
               image: '4-rijeka.jpg',
               price: 75,
               id: 19,
            },
            {
               name: 'Zagreb, Grad Zagreb',
               image: '4-zagreb.jpg',
               price: 80,
               id: 20,
            },
         ],
      },
      {
         id: 5,
         name: 'Svjetski poznati nacionalni parkovi',
         image: '5-banff.jpg',
         products: [
            {
               name: 'Banff, Kanada',
               image: '5-banff.jpg',
               price: 560,
               id: 21,
            },
            {
               name: 'Grand Canyon, Arizona',
               image: '5-grand_canyon.jpg',
               price: 650,
               id: 22,
            },
            {
               name: 'Plitvička jezera, Hrvatska',
               image: '5-plitvice.jpg',
               price: 85,
               id: 23,
            },
            {
               name: 'Torres del Paine, Čile',
               image: '5-torres.jpg',
               price: 540,
               id: 24,
            },
            {
               name: 'Yosemite, Kalifornija',
               image: '5-yosemite.jpg',
               price: 620,
               id: 25,
            },
         ],
      },
      {
         id: 6,
         name: 'Sedam svjetskih čuda novog vijeka',
         image: '6-great_wall.jpg',
         products: [
            {
               name: 'Kineski zid, Kina',
               image: '6-great_wall.jpg',
               price: 670,
               id: 26,
            },
            {
               name: 'Machu Picchu, Peru',
               image: '6-machu_pichu.jpg',
               price: 660,
               id: 27,
            },
            {
               name: 'Petra, Jordan',
               image: '6-petra.jpg',
               price: 780,
               id: 28,
            },
            {
               name: 'Kolosej, Italija',
               image: '6-colosseum.jpg',
               price: 300,
               id: 29,
            },
            {
               name: 'Chichén Itzá, Meksiko',
               image: '6-chichen-itza.jpg',
               price: 490,
               id: 30,
            },
         ],
      },
      {
         id: 7,
         name: 'Poznati muzeji',
         image: '7-louvre.jpg',
         products: [
            {
               name: 'Louvre, Pariz',
               image: '7-louvre.jpg',
               price: 510,
               id: 31,
            },
            {
               name: 'Prirodoslovni muzej, Beč',
               image: '7-nat_hist_vienna.jpg',
               price: 515,
               id: 32,
            },
            {
               name: 'Indian Museum, Kolkata',
               image: '7-indian_museum.jpg',
               price: 590,
               id: 33,
            },
            {
               name: 'The State Hermitage Museum, Sankt Peterburg',
               image: '7-hermitage.jpg',
               price: 530,
               id: 34,
            },
            {
               name: 'Van Gogh Museum, Amsterdam',
               image: '7-van_gogh.jpg',
               price: 510,
               id: 35,
            },
         ],
      },
      {
         id: 8,
         name: '"Bucket list" destinacije',
         image: '8-bora_bora.jpg',
         products: [
            {
               name: 'Bora-Bora, Francuska Polinezija',
               image: '8-bora_bora.jpg',
               price: 1050,
               id: 36,
            },
            {
               name: 'Cliffs of Moher, Irska',
               image: '8-moher.jpg',
               price: 805,
               id: 37,
            },
            {
               name: 'Polarna svjetlost u Norveškoj',
               image: '8-aurrora.jpg',
               price: 980,
               id: 38,
            },
            {
               name: 'Akropola, Atena',
               image: '8-acropolis.jpg',
               price: 1000,
               id: 39,
            },
            {
               name: 'Angkor, Kambodža',
               image: '8-angkor.jpg',
               price: 980,
               id: 40,
            },
         ],
      },
      {
         id: 9,
         name: 'Obiteljska putovanja',
         image: '9-orlando.jpg',
         products: [
            {
               name: 'Walt Disney World Resort, Orlando, Florida',
               image: '9-orlando.jpg',
               price: 1250,
               id: 41,
            },
            {
               name: "O'ahu, Hawai'i",
               image: '9-hawaii_oahu.jpg',
               price: 1300,
               id: 42,
            },
            {
               name: 'Bled, Slovenija',
               image: '9-bled.jpg',
               price: 670,
               id: 43,
            },
            {
               name: 'Jezero Garda, Italija',
               image: '9-garda.jpg',
               price: 715,
               id: 44,
            },
            {
               name: 'Yellowstone National Park,  Wyoming',
               image: '9-yellowstone.jpg',
               price: 830,
               id: 45,
            },
         ],
      },
      {
         id: 10,
         name: 'Za ljubitelje knjiga',
         image: '10-trinity.jpg',
         products: [
            {
               name: 'Chatsworth House, Derbyshire',
               image: '10-chatsworth.jpg',
               price: 790,
               id: 46,
            },
            {
               name: "Hall's Croft,  Stratford-upon-Avon",
               image: '10-halls_croft.jpg',
               price: 790,
               id: 47,
            },
            {
               name: 'The Hemingway Home & Museum, Florida',
               image: '10-hemingway.jpg',
               price: 790,
               id: 48,
            },
            {
               name: 'The Library of Trinity College, Dublin',
               image: '10-trinity.jpg',
               price: 640,
               id: 49,
            },
            {
               name: 'Lokacije iz djela "Zločin i kazna", Sankt Peterburg',
               image: '10-st_petersburg.jpg',
               price: 635,
               id: 50,
            },
         ],
      },
   ],
};

module.exports = data;
