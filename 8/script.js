const inputs = document.querySelectorAll("input");
const peopleInput = document.querySelector("#people");
const piecesInput = document.querySelector("#pieces");
const pizzaInput = document.querySelector("#pizza");
const pizzasContainer = document.querySelector(".pizzas");
for (const input of inputs) {
  input.addEventListener("input", () => {
    const [people, pieces, perPizza] = [
      Number(peopleInput.value),
      Number(piecesInput.value),
      Number(pizzaInput.value),
    ];
    if (!people || !pieces || !pizzaInput) return;
    const totalPieces = people * pieces;
    const pizzas = totalPieces / perPizza;
    pizzasContainer.textContent = `Total pizzas: ${pizzas}`;
  });
}
