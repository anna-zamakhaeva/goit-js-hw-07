const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", textOutput);


function textOutput(event) {
const trimmedNameInput = event.currentTarget.value.trim();
    if (trimmedNameInput.length !== 0) {
        nameOutput.textContent = trimmedNameInput;
    } else {
        nameOutput.textContent = "Anonymous";
    }
}