var kolicine = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0,
];

let trenutni_selected = document.querySelector('.c1');
let trenutna_kategorija = 0;

let total = 0;

/*Kod kategorije dodaje u listu lista_kategorija i onda u for petlji svakoj kategoriji doda event listner.
Kad se klikne na kategoriju prikazuju se slike i opisi za tu kategoriju pomoću funkcije update_picture*/

function update_picture(l) {
  document.querySelector('.div-naslov').textContent = data.categories[l].name;
  for (let k = 0; k < 5; k++) {
    document.querySelector(`.im0${k + 1}text`).textContent = data.categories[l].products[k].name;
    let image = document.getElementById(`im0${k + 1}`);
    image.setAttribute('src', 'images/' + data.categories[l].products[k].image);
    document.querySelector(`#btn${k + 1}text`).textContent = kolicine[trenutna_kategorija * 5 + k];
    /*prikaz odabranih količina u desnom kutu ako je broj odabranih > 0*/
    if (kolicine[trenutna_kategorija * 5 + k] != 0) document.querySelector(`#btn${k + 1}text.badge`).style.opacity = 100;
    else document.querySelector(`#btn${k + 1}text.badge`).style.opacity = 0;
  }
}

let lista_kategorija = [];
for (let i = 0; i < 10; i++) {
  lista_kategorija[i] = document.querySelector(`.c${i + 1}`);
}

for (let i = 0; i < 10; i++) {
  lista_kategorija[i].addEventListener('click', function () {
    trenutni_selected.classList.toggle('selected');
    lista_kategorija[i].classList.toggle('selected');
    trenutni_selected = lista_kategorija[i];
    trenutna_kategorija = i;
    update_picture(i);
  });
}

/*funkcionalnost klikanja na košaricu i povećavanja količine u kutu slike i na kosarica counteru*/
for (let i = 0; i < 5; i++) {
  document.querySelector(`.btn${i + 1}`).addEventListener('click', function () {
    kolicine[trenutna_kategorija * 5 + i] = Number(document.querySelector(`#btn${i + 1}text`).textContent) + 1;
    document.querySelector(`#btn${i + 1}text`).textContent = kolicine[trenutna_kategorija * 5 + i];
    total += 1;
    document.querySelector(`#btn${i + 1}text.badge`).style.opacity = 1;
    document.querySelector('.kosarica-badge').classList.remove('hide');
    document.querySelector('.kosarica-badge').textContent = total;
  });
}

/*programski ostvarivanje linka, kad se odlazi u košaricu se sprema trenutno stanje polja količina */
const cartImage = document.querySelector('.div-kosarica img');
cartImage.addEventListener('click', function () {
  sessionStorage.setItem('kolicine', JSON.stringify(kolicine));
  location.href = 'cart.html';
});
