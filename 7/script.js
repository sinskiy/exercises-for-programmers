const inputs = document.querySelectorAll("input");
const lengthInput = document.querySelector("#length");
const widthInput = document.querySelector("#width");
const feetContainer = document.querySelector(".feet");
const metersContainer = document.querySelector(".meters");
for (const input of inputs) {
  input.addEventListener("input", () => {
    const [length, width] = [
      Number(lengthInput.value),
      Number(widthInput.value),
    ];
    if (isNaN(length) || isNaN(width)) return;
    const areaFeet = length * width;
    const areaMeters = areaFeet * 0.09290304;
    feetContainer.innerHTML = `The area is <br/>${areaFeet} square feet`;
    metersContainer.textContent = `${areaMeters} square meters`;
  });
}
