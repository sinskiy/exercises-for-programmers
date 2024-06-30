const inputs = document.querySelectorAll("input");
for (const input of inputs) {
  input.addEventListener("change", updateTip);
}

const bill = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
function updateTip() {
  [tipAmount.textContent, totalAmount.textContent] = getTip(
    +bill.value,
    +tipInput.value
  );
}

const tipPercentage = document.querySelector(".tip-percentage");

tipInput.addEventListener("change", (e) => {
  tipPercentage.textContent = e.target.value;
});

function getTip(bill, tip) {
  const tipNumber = percentageToNumber(tip);
  const tipAmount = bill * tipNumber;
  const roundedTipAmount = roundToCents(tipAmount);
  const totalAmount = bill + roundedTipAmount;
  return [`Tip amount: ${roundedTipAmount}`, `Total amount: ${totalAmount}`];
}

function percentageToNumber(percentage) {
  return percentage / 100;
}

function roundToCents(number) {
  return getRoundedToPrecision(number, 2);
}

function getRoundedToPrecision(number, precision) {
  const precisionMultiplier = 10 ** precision;
  return Math.round(number * precisionMultiplier) / precisionMultiplier;
}
