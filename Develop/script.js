// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChar = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '_', '`', '{', '}', '~'];
var numberTypeChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var allCharTypes = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var passwordCharLength = Number(prompt('How many characters would you like your password to be? Requirement: between 8 and 128.', ""));


  if (passwordCharLength >= 8 && passwordCharLength <= 128) {
    return passwordCharLength;
  } else {
    alert('Your password length must be between 8 and 128 characters. Please try again.')
    generatePassword();
  }

  var passwordUpperCase = confirm('Do you want to use upper case characters?');
  if (passwordUpperCase) {
    allCharTypes.push(upperCaseChar);
  }

  var passwordLowerCase = confirm('Do you want to use lower case characters?');
  if (passwordLowerCase) {
    allCharTypes.push(lowerCaseChar);
  }

  var passwordSpecialChars = confirm('Do you want to use special characters?');
  if (passwordSpecialChars) {
    allCharTypes.push(specialChar);
  }

  var passwordNumberChars = confirm('Do you want to use numbers in your password?');
  if (passwordNumberChars) {
    allCharTypes.push(numberTypeChar);
  }


}

console.log(allCharTypes);

// let randomValue1 = lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
// let randomValue2 = upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
// let randomValue3 = specialChar[Math.floor(Math.random() * specialChar.length)];
// let randomValue4 = numberTypeChar[Math.floor(Math.random() * numberTypeChar.length)];


// Loop X number of times, where X is the number of characterts chose by user.
for (var i = 0; i < passwordCharLength.length; i++) {
  // Generate a random number between 1 and 10
  // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
  var num = Math.floor(Math.random() * passwordCharLength.length) + 1;

  // Display in console
  console.log(num);
}
