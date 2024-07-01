const inputs = document.querySelectorAll("input");
for (const input of inputs) {
  input.addEventListener("input", handleInput);
}

const principalInput = document.querySelector("#principal");
const rateInput = document.querySelector("#rate");
const yearsInput = document.querySelector("#years");
const worthContainer = document.querySelector(".worth");
function handleInput() {
  const principal = Number(principalInput.value);
  const ratePercentage = Number(rateInput.value);
  const years = Number(yearsInput.value);
  if (!principal || !ratePercentage || !years) return;
  const rate = ratePercentage / 100;
  const worth = moneyAfterInvestment(principal, rate, years);
  worthContainer.textContent = worth;
}

function moneyAfterInvestment(principal, rate, years) {
  return (principal * (1 + rate * years)).toFixed(2);
}
