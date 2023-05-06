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

for (let i = 97; i < 123; i++) {
  let letter = String.fromCharCode(i);
  lowercaseArray.push(letter);
  uppercaseArray.push(letter.toUpperCase());
}

showPasswordBtn.addEventListener("click", () => {
  let passwordLength = passwordRange.value;
  let lowercase = document.querySelector(".lowercaseCheck").checked;
  let uppercase = document.querySelector(".uppercaseCheck").checked;
  let numbers = document.querySelector(".numbersCheck").checked;
  let character = document.querySelector(".charactersCheck").checked;

  let passwordSource = [
    ...(lowercase ? lowercaseArray : []),
    ...(uppercase ? uppercaseArray : []),
    ...(numbers ? numberArray : []),
    ...(character ? charArray : []),
  ];

  if (passwordSource.length === 0) {
    passwordField.value = "";
    return;
  }

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * passwordSource.length);
    password += passwordSource[randomNumber];
  }
  passwordField.value = password;
});
