let passwordField = document.querySelector(".passwordField");
let passwordRange = document.querySelector(".passwordRange");
let passwordLength = document.querySelector(".passwordLength");
let showPasswordBtn = document.querySelector(".showPasswordBtn");

let uppercaseArray = [];
let lowercaseArray = [];
let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let charArray = ["!", "@", "#", "$", "%", "&", "?", "=", "-", "*", "^", ":"];

// * Show the length of password while adjusting the input[range]
passwordRange.addEventListener("change", () => {
  passwordLength.innerHTML = passwordRange.value;
});
