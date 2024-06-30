getTip(100, 11.111111111);

function getTip(bill, tip) {
  const tipNumber = percentageToNumber(tip);
  const tipAmount = bill * tipNumber;
  const roundedTipAmount = roundToCents(tipAmount);
  const totalAmount = bill + roundedTipAmount;
  console.log(`Tip: ${roundedTipAmount}, Total: ${totalAmount}`);
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
