const inputs = document.querySelectorAll("input");
const noun = document.querySelector("#noun");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const adverb = document.querySelector("#adverb");
const madLib = document.querySelector(".mad-lib");
for (const input of inputs) {
  input.addEventListener(
    "input",
    () =>
      (madLib.textContent = `Do you ${verb.value} your ${adjective.value} ${noun.value} ${adverb.value}? That's hilarious!`)
  );
}
