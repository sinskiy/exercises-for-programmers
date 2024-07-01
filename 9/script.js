const FEET_PER_GALLON = 350;

const inputs = document.querySelectorAll("input");
const roofInput = document.querySelector("#roof");
const gallonsContainer = document.querySelector(".gallons");
for (const input of inputs) {
  input.addEventListener("input", () => {
    const roofArea = Number(roofInput.value);
    if (!roofArea) return;
    const gallons = Math.ceil(roofArea / FEET_PER_GALLON);
    gallonsContainer.textContent = `Total gallons: ${gallons}`;
  });
}
