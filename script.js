const addButton = document.querySelector('button');
const priceValue = document.getElementById('price-value');

addButton.addEventListener('click', () => {
  const newPrice = 13.99; // Replace with your own calculation or API call
  priceValue.textContent = `$${newPrice.toFixed(2)}`;
});
