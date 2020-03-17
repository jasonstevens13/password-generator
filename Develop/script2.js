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
        alert('Your password length must be between 8 and 128 characters. Please try again.')
        generatePassword();
        return;
    }

    var passwordUpperCase = confirm('Do you want to use upper case characters?');
    var passwordLowerCase = confirm('Do you want to use lower case characters?');
    var passwordSpecialChars = confirm('Do you want to use special characters?');
    var passwordNumberChars = confirm('Do you want to use numbers in your password?');

    if (passwordUpperCase) {
        tempPassword = tempPassword + upperCaseChar;
        console.log(tempPassword);
    }

    if (passwordLowerCase) {
        tempPassword = tempPassword + lowerCaseChar;
        console.log(tempPassword);
    }

    if (passwordSpecialChars) {
        tempPassword = tempPassword + specialChar;
        console.log(tempPassword);
    }

    if (passwordNumberChars) {
        tempPassword = tempPassword + numberTypeChar;
        console.log(tempPassword);
    }

    // At least one of the char types must be chosen, so we have to create a block..
    if (passwordUpperCase === false && passwordLowerCase === false && passwordSpecialChars === false && passwordNumberChars === false) {
        alert('You must choose at least 1 character type. Please start over.');
        generatePassword();
        return;
    }

    console.log(passwordCharLength);
    console.log(tempPassword);

    // for (let i = 0; i < passwordCharLength; i++) {
    //     tempPassword.charAt[Math.floor(Math.random() * passwordCharLength)];
    //     console.log();

    // }


    for (var i = 0; i < passwordCharLength.length; i++) {
        temppassword2 = tempPassword2.push(tempPassword.charAt[Math.floor(Math.random() * tempPassword.length)]);
    }
    return tempPassword;

}







// for (let i = 0; i < passwordCharLength.length; i++) {
//     var passwordString = '';
//     const element = passwordCharLength[i];
//     passwordString.concat(i);

// }

//     generatePassword();


//     function arrayCharSelectors(arraySelectors) {
//         var arrayParam1 = allCharTypes[Math.floor(Math.random() * 10) + 1;];
//         var arrayParam2 = allCharTypes[Math.floor(Math.random() * 10) + 1;];
//         var arraySelectors = [arrayParam1][arrayParam2]
//     }

//     function passwordWriter(arraySelectors) {
//         toString();
//     }

//     return;

// }

// console.log(allCharTypes);

// let randomValue1 = lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
// let randomValue2 = upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
// let randomValue3 = specialChar[Math.floor(Math.random() * specialChar.length)];
// let randomValue4 = numberTypeChar[Math.floor(Math.random() * numberTypeChar.length)];

// let randomValue4 = allCharTypes[Math.floor(Math.random()][Math.floor(Math.random()];

// var arrayParam1 = allCharTypes[Math.floor(Math.random() * allCharTypes.length)];
// var arrayParam2 = arrayParam1[Math.floor(math.random() * arrayParam1.length)]);
// var arrayParam3 = [arrayParam1][arrayParam2];

