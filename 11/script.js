const inputs = document.querySelectorAll("input");
for (const input of inputs) {
  input.addEventListener("input", handleInput);
}

const eurosInput = document.querySelector("#euros");
const rateInput = document.querySelector("#rate");
const dollarsContainer = document.querySelector(".dollars");
function handleInput() {
  const euros = Number(eurosInput.value);
  const rate = Number(rateInput.value);
  if (!euros || !rate) return;
  const dollars = convert(euros, rate);
  dollarsContainer.textContent = dollars;
}

function convert(amount, rate) {
  return ((amount * rate) / 100).toFixed(2);
}
