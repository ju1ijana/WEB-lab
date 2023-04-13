let kolicine = JSON.parse(sessionStorage.getItem('kolicine'));

cijene = [
  120.0, 160.0, 740.0, 150.0, 160.0, 120.0, 180.0, 220.0, 130.0, 150.0, 680.0, 590.0, 400.0, 800.0, 750.0, 70.0, 85.0, 80.0, 75.0,
  80.0, 560.0, 650.0, 85.0, 540.0, 620.0, 670.0, 660.0, 780.0, 300.0, 490.0, 510.0, 515.0, 590.0, 530.0, 510.0, 1050.0, 805.0,
  980.0, 1000.0, 980.0, 1250.0, 1300.0, 670.0, 715.0, 830.0, 790.0, 740.0, 790.0, 640.0, 635.0,
];

let ukupno = new Array(50).fill(0.0);
let sub_total = 0;

let coupon_code = 1;
let used_code = false;

function displayTotal() {
  document.querySelector('.total-amount').textContent = (sub_total * coupon_code).toFixed(2);
}

window.addEventListener('load', function () {
  for (let i = 0; i < 50; i++) {
    if (kolicine[i] != 0) {
      const cartContents = document.querySelector('.cart-contents');
      const template = document.querySelector('.jedan-proizvod'); // dohvaćanje diva "jedan-proizvod"
      const newElement = template.cloneNode(true); // stvoren newElement koji je kopija "jedan-proizvod"
      /*dohvaćanje komponenti koje čine "jedan-proizvod" */
      const imgElement = newElement.querySelector('.proizvod-img img');
      const textElement = newElement.querySelector('.proizvod-text');
      const cijenaElement = newElement.querySelector('.cijena-item');
      const kolicinaElement = newElement.querySelector('.quantity');
      const ukupnoElement = newElement.querySelector('.ukupno-item');
      const quantityElement = newElement.querySelector('.quantity');
      if (quantityElement !== null) quantityElement.id = `c${i}`; // dodali id novo stvorenom divu

      /*upisivanje sadržaja koji se prikazuje u "jedan-proizvod"*/
      imgElement.src = 'images/' + data.categories[Math.floor(i / 5)].products[i % 5].image;
      textElement.textContent = data.categories[Math.floor(i / 5)].products[i % 5].name;
      cijenaElement.textContent = cijene[i].toFixed(2);
      kolicinaElement.textContent = kolicine[i];
      ukupno[i] = kolicine[i] * cijene[i];
      sub_total += ukupno[i];
      /*upisivanja svih podataka brišemo hide iz classList i prikazujemo "jedan-proizvod"*/
      ukupnoElement.textContent = ukupno[i].toFixed(2);
      newElement.classList.remove('hide');
      cartContents.appendChild(newElement);

      /*dodavanje EventListenera za gumbe minus i plus*/
      const buttonMinusElement = newElement.querySelector('.cart-button-minus');
      if (buttonMinusElement !== null) {
        buttonMinusElement.id = `m${i}`;
        buttonMinusElement.addEventListener('click', function () {
          if (kolicine[i] > 0) {
            kolicine[i] -= 1;
            ukupno[i] -= cijene[i];
            sub_total -= cijene[i];
            console.log(kolicine[i]);
            document.getElementById(`c${i}`).textContent = kolicine[i];
            newElement.querySelector('.ukupno-item').textContent = ukupno[i].toFixed(2);
            document.querySelector('.subtotal-amount').textContent = sub_total.toFixed(2);
            displayTotal();
            if (kolicine[i] == 0) cartContents.removeChild(newElement);
            if (kolicine.some(item => item !== 0) == 0) {
              document.querySelector('.totals-container').classList.add('hide');
            }
          }
        });
      }
      const buttonPlusElement = newElement.querySelector('.cart-button-plus');
      if (buttonPlusElement !== null) {
        buttonPlusElement.id = `p${i}`;
        buttonPlusElement.addEventListener('click', function () {
          kolicine[i] += 1;
          ukupno[i] += cijene[i];
          sub_total += cijene[i];
          document.getElementById(`c${i}`).textContent = kolicine[i];
          newElement.querySelector('.ukupno-item').textContent = ukupno[i].toFixed(2);
          document.querySelector('.subtotal-amount').textContent = sub_total.toFixed(2);
          displayTotal();
        });
      }
    }
  }

  /*na početku je dio košarice (gdje je ukupno) skriven, pokazati ga ako ima elemenata u košarici*/
  if (kolicine.some(item => item !== 0)) {
    document.querySelector('.totals-container').classList.remove('hide');
  }

  /*ako je originalni prazni div prisutan, maknuti ga*/
  const initialElement = document.querySelector('.jedan-proizvod.hide');
  if (initialElement) initialElement.remove();

  /*prikaz ukupne cijene prije i nakon popusta*/
  document.querySelector('.subtotal-amount').textContent = sub_total.toFixed(2);
  displayTotal();

  /*funkcionalnost gumba za unos kôda*/
  document.querySelector('.ok').addEventListener('click', function () {
    let inputc = document.querySelector('.input').value;
    if (inputc == 'VOLIMZABE') {
      coupon_code = 0.5;
      used_code = true;
      displayTotal();
    }
    document.querySelector('.input').value = '';
  });

  /*obavijest jeste li koristili kupon i micanje svega iz košarice kad se stisne PLATI*/
  this.document.querySelector('.plati').addEventListener('click', function () {
    if (!used_code) alert('Koristite kôd "VOLIMZABE" za 50% popusta!');
    else {
      const cartContents = document.querySelector('.cart-contents');
      while (cartContents.firstChild) cartContents.removeChild(cartContents.firstChild);
      document.querySelector('.totals-container').classList.add('hide');
      alert('Plaćeno!');
    }
  });
});
