const cartContents = document.querySelector('.cart-contents');

// Get the template element
const template = document.querySelector('.jedan-proizvod');

// Clone the template element and modify its contents
const newElement = template.cloneNode(true);
const imgElement = newElement.querySelector('.proizvod-img img');
const textElement = newElement.querySelector('.proizvod-text');
const cijenaElement = newElement.querySelector('.cijena-item');
const kolicinaElement = newElement.querySelector('.quantity');
const ukupnoElement = newElement.querySelector('.ukupno-item');

// Modify the contents of the cloned element based on the item being added
imgElement.src = 'images/new-item.jpg';
textElement.textContent = 'New Item';
cijenaElement.textContent = '100.00';
kolicinaElement.textContent = '2';
ukupnoElement.textContent = '200.00';

// Append the modified element to the cart contents
cartContents.appendChild(newElement);
