const data = {
  website: "Putovanja",
  categories: [
    {
      name: "Dvorci",
      image: "1-neuschwanstein.jpg",
      products: [
        {
          name: "Bran, Rumunjska",
          image: "1-bran.jpg",
        },
        {
          name: "Chambord, Francuska",
          image: "1-chambord.jpg",
        },
        {
          name: "Himeji, Japan",
          image: "1-himeji.jpg",
        },
        {
          name: "Neuschwanstein, Njemačka",
          image: "1-neuschwanstein.jpg",
        },

        {
          name: "Versailles, Francuska",
          image: "1-versailles.jpg",
        },
      ],
    },
    {
      name: "Svetišta i hodočasnička odredišta",
      image: "2-vatican.jpg",
      products: [
        {
          name: "Altötting, Njemačka",
          image: "2-altotting.jpg",
        },
        {
          name: "Asiz, Italija",
          image: "2-asiz.jpg",
        },
        {
          name: "Fátima, Portugal",
          image: "2-fatima.jpg",
        },
        {
          name: "Bazilika sv. Petra, Vatikan",
          image: "2-vatican.jpg",
        },

        {
          name: "Lourdes, Francuska",
          image: "2-lourdes.jpg",
        },
      ],
    },
    {
      name: "Veliki gradovi",
      image: "3-nyc.jpg",
      products: [
        {
          name: "New York City, New York",
          image: "3-nyc.jpg",
        },
        {
          name: "London, Ujedinjeno Kraljevstvo",
          image: "3-london.jpg",
        },
        {
          name: "Pariz, Francuska",
          image: "3-paris.jpg",
        },
        {
          name: "Sydney, Australija",
          image: "3-sydney.jpg",
        },
        {
          name: "Tokio, Japan",
          image: "3-tokyo.jpg",
        },
      ],
    },
    {
      name: "Gradovi u Hrvatskoj",
      image: "4-split.jpg",
      products: [
        {
          name: "Osijek, Osječko-baranjska županija",
          image: "4-osijek.jpg",
        },
        {
          name: "Split, Splitsko-dalmatinska županija",
          image: "4-split.jpg",
        },
        {
          name: "Zadar, Zadarska županija",
          image: "4-zadar.jpg",
        },
        {
          name: "Rijeka, Primorsko-goranska županija",
          image: "4-rijeka.jpg",
        },
        {
          name: "Zagreb, Grad Zagreb",
          image: "4-zagreb.jpg",
        },
      ],
    },
    {
      name: "Svjetski poznati nacionalni parkovi",
      image: "5-banff.jpg",
      products: [
        {
          name: "Banff, Kanada",
          image: "5-banff.jpg",
        },
        {
          name: "Grand Canyon, Arizona",
          image: "5-grand_canyon.jpg",
        },
        {
          name: "Plitvička jezera, Hrvatska",
          image: "5-plitvice.jpg",
        },
        {
          name: "Torres del Paine, Čile",
          image: "5-torres.jpg",
        },
        {
          name: "Yosemite, Kalifornija",
          image: "5-yosemite.jpg",
        },
      ],
    },
    {
      name: "Sedam svjetskih čuda novog vijeka",
      image: "6-great_wall.jpg",
      products: [
        {
          name: "Kineski zid, Kina",
          image: "6-great_wall.jpg",
        },
        {
          name: "Machu Picchu, Peru",
          image: "6-machu_pichu.jpg",
        },
        {
          name: "Petra, Jordan",
          image: "6-petra.jpg",
        },
        {
          name: "Kolosej, Italija",
          image: "6-colosseum.jpg",
        },
        {
          name: "Chichén Itzá, Meksiko",
          image: "6-chichen-itza.jpg",
        },
      ],
    },
    {
      name: "Poznati muzeji",
      image: "7-louvre.jpg",
      products: [
        {
          name: "Louvre, Pariz",
          image: "7-louvre.jpg",
        },

        {
          name: "Prirodoslovni muzej, Beč",
          image: "7-nat_hist_vienna.jpg",
        },
        {
          name: "Indian Museum, Kolkata",
          image: "7-indian_museum.jpg",
        },
        {
          name: "The State Hermitage Museum, Sankt Peterburg",
          image: "7-hermitage.jpg",
        },
        {
          name: "Van Gogh Museum, Amsterdam",
          image: "7-van_gogh.jpg",
        },
      ],
    },
    {
      name: '"Bucket list" destinacije',
      image: "8-bora_bora.jpg",
      products: [
        {
          name: "Bora-Bora, Francuska Polinezija",
          image: "8-bora_bora.jpg",
        },
        {
          name: "Cliffs of Moher, Irska",
          image: "8-moher.jpg",
        },
        {
          name: "Polarna svjetlost u Norveškoj",
          image: "8-aurrora.jpg",
        },
        {
          name: "Akropola, Atena",
          image: "8-acropolis.jpg",
        },
        {
          name: "Angkor, Kambodža",
          image: "8-angkor.jpg",
        },
      ],
    },
    {
      name: "Obiteljska putovanja",
      image: "9-orlando.jpg",
      products: [
        {
          name: "Walt Disney World Resort, Orlando, Florida",
          image: "9-orlando.jpg",
        },
        {
          name: "O'ahu, Hawai'i",
          image: "9-hawaii_oahu.jpg",
        },
        {
          name: "Bled, Slovenija",
          image: "9-bled.jpg",
        },
        {
          name: "Jezero Garda, Italija",
          image: "9-garda.jpg",
        },
        {
          name: "Yellowstone National Park,  Wyoming",
          image: "9-yellowstone.jpg",
        },
      ],
    },
    {
      name: "Za ljubitelje knjiga",
      image: "10-trinity.jpg",
      products: [
        {
          name: "Chatsworth House, Derbyshire",
          image: "10-chatsworth.jpg",
        },
        {
          name: "Hall's Croft,  Stratford-upon-Avon",
          image: "10-halls_croft.jpg",
        },
        {
          name: "The Hemingway Home & Museum, Florida",
          image: "10-hemingway.jpg",
        },
        {
          name: "The Library of Trinity College, Dublin",
          image: "10-trinity.jpg",
        },
        {
          name: 'Lokacije iz djela "Zločin i kazna", Sankt Peterburg',
          image: "10-st_petersburg.jpg",
        },
      ],
    },
  ],
};
