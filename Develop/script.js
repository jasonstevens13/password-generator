// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChar = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '_', '`', '{', '}', '~'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var passwordCharLength = Number(prompt('How many characters would you like your password to be? Requirement: betweek 8 and 128.', ""));

}
  // if (charLength.num1 >= 8 && charLength.num1 <= 128) {
  //   alert('Thank You');
  //   return num1;
  // }



  //   else {
  //     alert('Sorry, that will not work. Please select a number between 8 and 128.');
  //     generatePassword();

  //   }

  // }
  // if (charLength >= 8 && charLength <= 128) {
  //   alert('Thank You');
  //   return;
  // } else {
  //   alert('Sorry, that will not work. Please select a number between 8 and 128.');
  //   generatePassword();
  // }
  //   }




  // Then prompt whether using lower case.
  // Then prompt whether using uppercase.
  // Then prompt whether using special characters.
