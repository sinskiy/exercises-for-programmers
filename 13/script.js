const inputs = document.querySelectorAll("input");
for (const input of inputs) {
  input.addEventListener("input", handleInput);
}

const principalInput = document.querySelector("#principal");
const rateInput = document.querySelector("#rate");
const yearsInput = document.querySelector("#years");
const compoundedInput = document.querySelector("#compounded");
const worthContainer = document.querySelector(".worth");
function handleInput() {
  const principal = Number(principalInput.value);
  const ratePercentage = Number(rateInput.value);
  const years = Number(yearsInput.value);
  const compoundedPerYear = Number(compoundedInput.value);
  if (!principal || !ratePercentage || !years || !compoundedPerYear) return;
  const rate = ratePercentage / 100;
  console.log(rate, years, compoundedPerYear);
  const worth = moneyAfterInvestment(principal, rate, years, compoundedPerYear);
  worthContainer.textContent = worth;
}

function moneyAfterInvestment(principal, rate, years, compoundedPerYear) {
  return (
    principal *
    (1 + rate / compoundedPerYear) ** (compoundedPerYear * years)
  ).toFixed(2);
}
