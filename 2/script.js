const lengthInput = document.querySelector("#length");
const lengthOutput = document.querySelector(".length-output");
lengthInput.addEventListener(
  "input",
  () => (lengthOutput.textContent = lengthInput.value.length)
);
