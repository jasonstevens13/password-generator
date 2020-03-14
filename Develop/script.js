// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChar = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '_', '`', '{', '}', '~'];
var numberTypeChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


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
  var passwordContent = passwordCharLength;

  if (passwordCharLength >= 8 && passwordCharLength <= 128) {
    return passwordCharLength;
  } else {
    alert('Your password length must be between 8 and 128 characters. Please try again.')
    generatePassword();
  }

  var passwordUpperCase = confirm('Do you want to use upper case characters?');
  var passwordLowerCase = confirm('Do you want to use lower case characters?');
  var passwordSpecialChars = confirm('Do you want to use special characters?');
  var passwordNumberChars = confirm('Do you want to use numbers in your password?');

  if (passwordUpperCase) {

  }


}



  // Then prompt whether using lower case.
  // Then prompt whether using uppercase.
  // Then prompt whether using special characters.
