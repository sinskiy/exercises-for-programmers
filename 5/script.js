const inputs = document.querySelectorAll("input");
const firstNumber = document.querySelector("#first");
const secondNumber = document.querySelector("#second");
const addition = document.querySelector(".addition");
const substraction = document.querySelector(".substraction");
const multiplication = document.querySelector(".multiplication");
const division = document.querySelector(".division");
for (const input of inputs) {
  input.addEventListener("input", () => {
    const [a, b] = [Number(firstNumber.value), Number(secondNumber.value)];
    addition.textContent = fullMathExpression("+", a, b);
    substraction.textContent = fullMathExpression("-", a, b);
    multiplication.textContent = fullMathExpression("*", a, b);
    division.textContent = fullMathExpression("/", a, b);
  });
}

function fullMathExpression(operator, a, b) {
  const base = `${a} ${operator} ${b} = `;

  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;

    case "-":
      result = a - b;
      break;

    case "*":
      result = a * b;
      break;

    case "/":
      result = a / b;
      break;
  }
  return base + result;
}
