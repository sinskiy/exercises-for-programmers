const ITEMS = 3;

const inputsContainer = document.querySelector(".inputs");
inputsContainer.addEventListener("input", calculateWithTax);
for (let i = 0; i < ITEMS; i++) {
  createItemInputs(i);
}

const subtotalContainer = document.querySelector(".subtotal");
const taxContainer = document.querySelector(".tax");
const totalContainer = document.querySelector(".total");
function calculateWithTax() {
  let subtotal = 0;
  for (let i = 0; i < ITEMS; i++) {
    const price = inputsContainer.children[i * 2].value;
    const quantity = inputsContainer.children[i * 2 + 1].value;
    const itemPrice = price * quantity;
    subtotal += itemPrice;
  }
  const tax = subtotal * 0.055;
  const total = subtotal + tax;

  subtotalContainer.textContent = `Subtotal: ${subtotal}$`;
  taxContainer.textContent = `Tax: ${tax}$`;
  totalContainer.textContent = `Total: ${total}$`;
}

function createItemInputs(number) {
  const price = document.createElement("input");
  price.setAttribute("type", "number");
  price.placeholder = `Price of item ${number}`;
  const quantity = document.createElement("input");
  quantity.setAttribute("type", "number");
  quantity.placeholder = `Quantity of item ${number}`;
  inputsContainer.append(price, quantity);
}
