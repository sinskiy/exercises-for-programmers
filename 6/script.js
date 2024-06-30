const inputs = document.querySelectorAll("input");
const ageInput = document.querySelector("#age");
const retirementAgeInput = document.querySelector("#retirement-age");
const leftContainer = document.querySelector(".left");
const yearContainer = document.querySelector(".year");
for (const input of inputs) {
  input.addEventListener("input", () => {
    const [age, retirementAge] = [
      Number(ageInput.value),
      Number(retirementAgeInput.value),
    ];
    const left = retirementAge - age;
    if (left < 0) {
      leftContainer.textContent = "You can already retire";
    } else {
      leftContainer.textContent = `You have ${left} years left`;

      const year = new Date().getFullYear();
      yearContainer.textContent = `It's ${year}, so you can retire in ${
        year + left
      }`;
    }
  });
}
