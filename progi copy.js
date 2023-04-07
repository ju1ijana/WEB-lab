let lista_slika = [
  '1-bran.jpg',
  '1-chambord.jpg',
  '1-himeji.jpg',
  '1-neuschwanstein.jpg',
  '1-versailles.jpg',
  '2-altotting.jpg',
  '2-asiz.jpg',
  '2-fatima.jpg',
  '2-lourdes.jpg',
  '2-vatican.jpg',
  '3-nyc.jpg',
  '3-london.jpg',
  '3-paris.jpg',
  '3-sydney.jpg',
  '3-tokyo.jpg',
  '4-osijek.jpg',
  '4-split.jpg',
  '4-zadar.jpg',
  '4-rijeka.jpg',
  '4-zagreb.jpg',
  '5-banff.jpg',
  '5-grand_canyon.jpg',
  '5-plitvice.jpg',
  '5-torres.jpg',
  '5-yosemite.jpg',
  '6-great_wall.jpg',
  '6-machu_pichu.jpg',
  '6-petra.jpg',
  '6-colosseum.jpg',
  '6-chichen-itza.jpg',
  '7-louvre.jpg',
  '7-nat_hist_vienna.jpg',
  '7-indian_museum.jpg',
  '7-hermitage.jpg',
  '7-van_gogh.jpg',
  '8-bora_bora.jpg',
  '8-moher.jpg',
  '8-aurrora.jpg',
  '8-acropolis.jpg',
  '8-angkor.jpg',
  '9-orlando.jpg',
  '9-hawaii_oahu.jpg',
  '9-bled.jpg',
  '9-garda.jpg',
  '9-yellowstone.jpg',
  '10-chatsworth.jpg',
  '10-halls_croft.jpg',
  '10-hemingway.jpg',
  '10-trinity.jpg',
  '10-st_petersburg.jpg',
];

let opis_slika = [
  'Bran, Rumunjska',
  'Chambord, Francuska',
  'Himeji, Japan',
  'Neuschwanstein, Njemačka',
  'Versailles, Francuska',
  'Altötting, Njemačka',
  'Asiz, Italija',
  'Fátima, Portugal',
  'Lourdes, Francuska',
  'Bazilika sv. Petra, Vatikan',
  'New York City, New York',
  'London, Ujedinjeno Kraljevstvo',
  'Pariz, Francuska',
  'Sydney, Australija',
  'Tokio, Japan',
  'Osijek, Osječko-baranjska županija',
  'Split, Splitsko-dalmatinska županija',
  'Zadar, Zadarska županija',
  'Rijeka, Primorsko-goranska županija',
  'Zagreb, Grad Zagreb',
  'Banff, Kanada',
  'Grand Canyon, Arizona',
  'Plitvička jezera, Hrvatska',
  'Torres del Paine, Čile',
  'Yosemite, Kalifornija',
  'Kineski zid, Kina',
  'Machu Picchu, Peru',
  'Petra, Jordan',
  'Kolosej, Italija',
  'Chichén Itzá, Meksiko',
  'Louvre, Pariz',
  'Prirodoslovni muzej, Beč',
  'Indian Museum, Kolkata',
  'The State Hermitage Museum, Sankt Peterburg',
  'Van Gogh Museum, Amsterdam',
  'Bora-Bora, Francuska Polinezija',
  'Cliffs of Moher, Irska',
  'Polarna svjetlost u Norveškoj',
  'Akropola, Atena',
  'Angkor, Kambodža',
  'Walt Disney World Resort, Orlando, Florida',
  "O'ahu, Hawai'i",
  'Bled, Slovenija',
  'Jezero Garda, Italija',
  'Yellowstone National Park,  Wyoming',
  'Chatsworth House, Derbyshire',
  "Hall's Croft,  Stratford-upon-Avon",
  'The Hemingway Home & Museum, Florida',
  'The Library of Trinity College, Dublin',
  'Lokacije iz djela "Zločin i kazna", Sankt Peterburg',
];

let naslovi = [
  'Dvorci',
  'Svetišta i hodočasnička odredišta',
  'Veliki gradovi',
  'Gradovi u Hrvatskoj',
  'Svjetski poznati nacionalni parkovi',
  'Sedam svjetskih čuda novog vijeka',
  'Poznati muzeji',
  'Bucket list destinacije',
  'Obiteljska putovanja',
  'Za ljubitelje knjiga',
];

let opisi = [
  'Od prekrasnih vrtova do raskošnih soba, tajanstvenih odaja i hodnika, svaki dvorac ima svoju priču za ispričati. Razmislite o posjetu dvorcu na svom sljedećem putovanju i osjetite čaroliju prošlosti i ljepote tog područja.',
  'Hodočašća nas podsjećaju da smo putnici na životnom putu te da konačni cilj nije ovaj svijet, već domovina koja nas čeka u nebesima. Intenzivnije doživite svoju vjeru i budite u bliskom doticaju s Bogom - hodočastite!',
  'Od razgledavanja povijesnih znamenitosti, muzeja i umjetničkih galerija, do zabavnih parkova, koncerata i kazališnih predstava... u velikim gradovima uvijek postoji nešto za svakoga. Otvorite vrata novim iskustvima!',
  'Planirajte svoj idući odmor u nekom od gradova Lijepe Naše! Otkrijte bogatu kulturu, povijest i arhitekturu koja je oblikovala našu zemlju i njezine stanovnike podržavajući pritom lokalno gospodarstvo i turizam.',
  'Posjet poznatim nacionalnim parkovima pruža ne samo nezaboravno iskustvo u prekrasnim prirodnim okruženjima, već i priliku da naučite ponešto o različitim vrstama biljaka i životinja te da podržite njihovo očuvanje i zaštitu.',
  'Posjet svjetskim čudima predstavlja jedinstveno iskustvo koje nam omogućuje da upoznamo bogatu povijest ljudske civilizacije, otkrijemo arhitektonsku ljepotu koju su stvorili najveći graditelji drevnog svijeta, upoznamo različite kulture i tradicije te putujemo kroz vrijeme.',
  'Uđite u muzej i zaronite u priče prošlih vremena, kulture i umjetnosti koje su obilježile našu civilizaciju. Izložbe su vam otvorene, a vi ste pozvani da otvorite vrata svijetu koji vam nudi nevjerojatne priče, zanimljive artefakte i jedinstvene umjetničke radove.',
  'Putovanje na vašu bucket list destinaciju predstavlja priliku za uzbudljivu avanturu, otkrivanje novih mjesta, ukusa i mirisa, upoznavanje novih ljudi i kultura... Sve su to iskustva koja će vas obogatiti i ostaviti trajni utjecaj.',
  'Obiteljsko putovanje može biti nezaboravno iskustvo koje će vas zbližiti, pružiti vam vrijeme za zajedničko uživanje i stvaranje prekrasnih uspomena kojih ćete se rado prisjećati cijeli život.',
  'Najdraži način opuštanja vam je uz dobru knjigu? Oduvijek vas je zanimalo gdje se u stvarnom životu nalaze lokacije iz djela "Zločin i kazna"? Mislimo da znamo nekoliko destinacija koje morate posjetiti!',
];

let trenutni_selected = document.querySelector('.c1');
let trenutna_kategorija = 0;
let dobrodosli = true;

let kolicine = new Array(50).fill(0);
let total = 0;

/*Kod kategorije dodaje u listu lista_kategorija i onda u for petlji svakoj kategoriji doda event listner.
Kad se klikne na kategoriju prikazuju se slike i opisi za tu kategoriju pomoću funkcije update_picture*/

function update_picture(i, l) {
  document.querySelector('.div-naslov').textContent = naslovi[l];
  for (let j = i, k = 0; j < i + 5, k < 5; j++, k++) {
    document.querySelector(`.im0${k + 1}text`).textContent = opis_slika[j];
    let image = document.getElementById(`im0${k + 1}`);
    image.setAttribute('src', 'images/' + lista_slika[j]);
    document.querySelector(`.btn${k + 1}text`).textContent =
      kolicine[trenutna_kategorija * 5 + k];
  }
}

let lista_kategorija = [];
for (let i = 0; i < 10; i++) {
  lista_kategorija[i] = document.querySelector(`.c${i + 1}`);
}

for (let i = 0; i < 10; i++) {
  lista_kategorija[i].addEventListener('click', function () {
    if (dobrodosli) {
      const container = document.querySelector('.stupac-container2');
      const secondChild = container.children[1];
      container.removeChild(secondChild);
      dobrodosli = false;
    }
    trenutni_selected.classList.toggle('selected');
    lista_kategorija[i].classList.toggle('selected');
    trenutni_selected = lista_kategorija[i];
    trenutna_kategorija = i;
    update_picture(i * 5, i);
  });
}

/*funkcionalnost klikanja na košaricu i povećavanja količine u kutu slike i na kosarica counteru*/
for (let i = 0; i < 5; i++) {
  document.querySelector(`.btn${i + 1}`).addEventListener('click', function () {
    kolicine[trenutna_kategorija * 5 + i] =
      Number(document.querySelector(`.btn${i + 1}text`).textContent) + 1;
    document.querySelector(`.btn${i + 1}text`).textContent =
      kolicine[trenutna_kategorija * 5 + i];
    total += 1;
    document.querySelector('.kosarica-badge').classList.remove('hide');
    document.querySelector('.kosarica-badge').textContent = total;
  });
}

if (window.location.pathname == '/index02.html') {
  alert('Welcome to the index page!');
} else if (window.location.pathname == '/cart.html') {
  alert('Welcome to the cart page!');
}
