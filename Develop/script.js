// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChar = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '_', '`', '{', '}', '~'];
var numberTypeChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var allCharTypes = [];
// var passwordCharLengthFinal = passwordCharLength;

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

  // At least one of the char types must be chosen, so we have to create a block..
  if (passwordUpperCase === false && passwordLowerCase === false && passwordSpecialChars === false && passwordNumberChars === false) {
    alert('You must choose at least 1 character type. Please start over.');
    generatePassword();
  }

  return passwordCharLength;


  for (let i = 0; i < passwordCharLength.length; i++) {
    var passwordString = '';
    const element = passwordCharLength[i];
    passwordString.concat(i);

  }

  generatePassword();


  // function arrayCharSelectors(arraySelectors) {
  //   var arrayParam1 = allCharTypes[Math.floor(Math.random() * 10) + 1;];
  //   var arrayParam2 = allCharTypes[Math.floor(Math.random() * 10) + 1;];
  //   var arraySelectors = [arrayParam1][arrayParam2]
  // }

  // function passwordWriter(arraySelectors) {
  //   toString();
  // }

  // return;

}

// console.log(allCharTypes);

// let randomValue1 = lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
// let randomValue2 = upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
// let randomValue3 = specialChar[Math.floor(Math.random() * specialChar.length)];
// let randomValue4 = numberTypeChar[Math.floor(Math.random() * numberTypeChar.length)];

// let randomValue4 = allCharTypes[Math.floor(Math.random()][Math.floor(Math.random()];

// var arrayParam1 = allCharTypes[Math.floor(Math.random() * allCharTypes.length)];
// var arrayParam2 = arrayParam1[Math.floor(math.random() * arrayParam1.length)]);
// var arrayParam3 = [arrayParam1][arrayParam2];

