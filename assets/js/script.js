// Global Variables
const formInputBox = document.getElementById("ideas");
const formBtn = document.getElementById("submitBtn");

console.log(formInputBox);
console.log(formBtn);

const ideaBox = [];

// I want to grab the value of the ideas I type into my input box
// Then, I want to somehow store that value in local storage.
// This should only happen after I click the submit button!
// More specific you are when designing/planning out the fature
// Is called pseudocoding

formBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Did I click the button?");
  const userInput = formInputBox.value.trim();
  userInput.textContent = "";
  console.log(userInput);
  ideaBox.push(userInput);
  localStorage.setItem("idea", JSON.stringify(ideaBox));
  retrieveDataFromLocalStorage();
});

function retrieveDataFromLocalStorage() {
  const valueFromLocalStorage = JSON.parse(localStorage.getItem("idea"));
  console.log(valueFromLocalStorage);
  console.log(typeof valueFromLocalStorage);
}

