// Sélection des éléments nécessaires
const plusButtons = document.querySelectorAll('.fa-plus-circle');
const minusButtons = document.querySelectorAll('.fa-minus-circle');
const deleteButtons = document.querySelectorAll('.fa-trash-alt');
const likeButtons = document.querySelectorAll('.fa-heart');
const unitPriceElements = document.querySelectorAll('.unit-price');
const totalPriceElement = document.querySelector('.total');

// Fonction pour mettre à jour le prix total
function updateTotalPrice() {
  let totalPrice = 0;
  unitPriceElements.forEach((element, index) => {
    const quantity = parseInt(element.parentElement.querySelector('.quantity').textContent);
    const unitPrice = parseFloat(element.textContent.replace('$', ''));
    totalPrice += quantity * unitPrice;
  });
  totalPriceElement.textContent = `${totalPrice.toFixed(2)} $`;
}

// Gestion de l'ajout de quantité
plusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const quantityElement = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    updateTotalPrice();
  });
});

// Gestion de la diminution de quantité
minusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const quantityElement = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantity--;
      quantityElement.textContent = quantity;
      updateTotalPrice();
    }
  });
});

// Gestion de la suppression d'article
deleteButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const card = button.closest('.card-body');
    card.remove();
    updateTotalPrice();
  });
});

// Gestion des likes
likeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    button.classList.toggle('text-danger');
  });
});

// Initialisation du prix total
updateTotalPrice();