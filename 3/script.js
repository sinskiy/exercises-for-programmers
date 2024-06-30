const inputs = document.querySelectorAll("input");
const author = document.querySelector("#author");
const quote = document.querySelector("#quote");
const refactoredQuote = document.querySelector(".refactored-quote");
for (const input of inputs) {
  input.addEventListener(
    "input",
    () =>
      (refactoredQuote.textContent =
        author.value + ' says, "' + quote.value + '"')
  );
}
lengthInput.addEventListener(
  "input",
  () => (lengthOutput.textContent = lengthInput.value.length)
);
