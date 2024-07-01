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
  const rate = Number(rateInput.value);
  const years = Number(yearsInput.value);
  if (!principal || !rate || !years) return;
  const months = years * 12;
  const worth = moneyAfterInvestment(principal, rate, months);
  worthContainer.textContent = worth;
}

function moneyAfterInvestment(principal, rate, months) {
  // b(n) = b(1)*q(n - 1 )
  return principal * (rate / 100) * (months - 1);
}
