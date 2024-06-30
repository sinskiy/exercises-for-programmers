getTip(100, 11.111111111);

function getTip(bill, tip) {
  const tipNumber = percentageToNumber(tip);
  const tipAmount = bill * tipNumber;
  const roundedTipAmount = getRoundedToPrecision(tipAmount, 2);
  const totalAmount = bill + roundedTipAmount;
  console.log(`Tip: ${roundedTipAmount}, Total: ${totalAmount}`);
}

function percentageToNumber(percentage) {
  return parseFloat(percentage) / 100;
}

function getRoundedToPrecision(number, precision) {
  const precisionMultiplier = 10 ** precision;
  return Math.round(number * precisionMultiplier) / precisionMultiplier;
}
