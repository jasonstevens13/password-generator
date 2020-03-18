// Assignment Code
var generateBtn = document.querySelector("#generate");
// I created the following variables to take the strings of the different char types the user can select.
var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar = '!"#$%&()*+-./:;<>=?@[]^_`{}~';
var numberTypeChar = '0123456789';
// The following variable 'tempPassword2' is initialized as an empty string, which will later take the chars from user selection of char types and random selection of specific chars. 
var tempPassword2 = '';


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// The rest of the code will take place in the following 'generatePassword' function. From this we will ultimately return a string of chars that make up the password.
function generatePassword() {
    // Variable containing an empty string initialized. This will take chars later.
    var tempPassword = '';
    var tempPassword2 = '';

    // The first prompt asks the user to select the number of chars they'd like in their password, and stores their number response in a variable named passwordCharLength. 
    var passwordCharLength = Number(prompt('How many characters would you like your password to be? Requirement: between 8 and 128.', ""));

    // The following if statement checks to make sure user selects a number betwee 8 and 128 as instructed; 
    // and if not they are alerted and have to begin the process anew. We would clear the function and start from the top.
    if (passwordCharLength >= 8 && passwordCharLength <= 128) {
    } else {
        alert('Your password length must be between 8 and 128 characters. Please try again.');
        generatePassword();
        return;
    }

    // We then ask the use with confirms (Ok or Cancel) , the following char types they'd like to include in their password.
    // These answers, which are essentially true/false, are stored in their respective varable names.
    var passwordUpperCase = confirm('Do you want to use upper case characters?');
    var passwordLowerCase = confirm('Do you want to use lower case characters?');
    var passwordSpecialChars = confirm('Do you want to use special characters?');
    var passwordNumberChars = confirm('Do you want to use numbers in your password?');


    // The folllowing (4) 'if' statement conditionals simlply take the sets of chars for each confirmed response,
    // and concatenates the string to the 'tempPassword' variable string that started off as blank.
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


    // At least one of the char types must be chosen, so we have to create a check. 
    // If the user clicked cancel through every confirm prompt, they are alerted that they must choose one and to start over.
    if (passwordUpperCase === false && passwordLowerCase === false && passwordSpecialChars === false && passwordNumberChars === false) {
        alert('You must choose at least 1 character type. Please start over.');
        generatePassword();
        return;
    }

    // Once all of the user's selections have been concatenated into one string named the 'tempPassword' variable,
    // we must iterate through the string to extract random characters, at the same volume as the user's original number selection.
    // The original number selection was store in the 'passwordCharLength' variable seen in the for loop below.
    for (var i = 0; i < passwordCharLength; i++) {
        var c = tempPassword.charAt(Math.floor(Math.random() * tempPassword.length));

        // We then introduce 'tempPassword2' variable wich is the other string that was initialized as blank. 
        // As we interate through the cocatenated string of chars, we grab each randomly selected char and add them together
        // in the 'tempPAssword2' string variable.  
        tempPassword2 += c;
    }
    // The final step in this function is to return the new password that's been created. Therefore this entire function,
    // named 'generatePassword' returns the product that is 'tempPassword2'. This result is then passed back
    // to the original function 'writePassword' which was waiting for the result. 
    return (tempPassword2);

}