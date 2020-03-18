// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar = '!"#$%&()*+-./:;<>=?@[]^_`{}~';
var numberTypeChar = '0123456789';
var allCharTypes = '';
var tempPassword2 = '';
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
    var tempPassword = '';
    var tempPassword2 = '';
    var passwordCharLength = Number(prompt('How many characters would you like your password to be? Requirement: between 8 and 128.', ""));
    if (passwordCharLength >= 8 && passwordCharLength <= 128) {
    } else {
        alert('Your password length must be between 8 and 128 characters. Please try again.');
        generatePassword();
        return;
    }

    var passwordUpperCase = confirm('Do you want to use upper case characters?');
    var passwordLowerCase = confirm('Do you want to use lower case characters?');
    var passwordSpecialChars = confirm('Do you want to use special characters?');
    var passwordNumberChars = confirm('Do you want to use numbers in your password?');

    if (passwordUpperCase) {
        tempPassword = tempPassword + upperCaseChar;
    }

    if (passwordLowerCase) {
        tempPassword = tempPassword + lowerCaseChar;
    }

    if (passwordSpecialChars) {
        tempPassword = tempPassword + specialChar;
    }

    if (passwordNumberChars) {
        tempPassword = tempPassword + numberTypeChar;
    }

    // At least one of the char types must be chosen, so we have to create a block..
    if (passwordUpperCase === false && passwordLowerCase === false && passwordSpecialChars === false && passwordNumberChars === false) {
        alert('You must choose at least 1 character type. Please start over.');
        generatePassword();
        return;
    }

    for (var i = 0; i < passwordCharLength; i++) {
        var c = tempPassword.charAt(Math.floor(Math.random() * tempPassword.length));
        tempPassword2 += c;
    }

    return (tempPassword2);

}

