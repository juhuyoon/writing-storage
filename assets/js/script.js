// Global Variables
const formInputBox = document.getElementById("ideas");
const formBtn = document.getElementById("submitBtn");
const myNotesSection = document.getElementById("my-notes");

const ideaBox = [];

// I want to grab the value of the ideas I type into my input box
// Then, I want to somehow store that value in local storage.
// This should only happen after I click the submit button!
// More specific you are when designing/planning out the fature
// Is called pseudocoding

formBtn.addEventListener("click", function (event) {
  event.preventDefault();
  //   console.log("Did I click the button?");
  const userInput = formInputBox.value.trim();
  console.log("This is when we click", userInput);
  ideaBox.push(userInput);
  localStorage.setItem("idea", JSON.stringify(ideaBox));
  retrieveDataFromLocalStorage();
});

function retrieveDataFromLocalStorage() {
  const valueFromLocalStorage = JSON.parse(localStorage.getItem("idea"));
  console.log("This is from localstorage getitem", valueFromLocalStorage);
  //   console.log(typeof valueFromLocalStorage);
  displayContentFromLocalStorage(valueFromLocalStorage);
}

function displayContentFromLocalStorage(pikachu) {
  console.log("from displayContent", pikachu);
  //  I know this is going to be an array of values
  // And I want to take that text and display to the screen
  // So..... I can iterate through an array
  // Create elements and then append them to the page
  for (let i = 0; i < pikachu.length; i++) {
    const notesToDisplay = pikachu[i];
    const list = document.createElement("li");
    list.setAttribute("class", "list-group-item");
    list.textContent = notesToDisplay;
    myNotesSection.appendChild(list);
  }
}
