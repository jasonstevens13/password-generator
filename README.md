# Password-Generator
password-generator
Link: https://jasonstevens13.github.io/password-generator/

# Description
This password generator application, does just that - generates a password. However, the important attribute is that the application generates a random password based on user input. These features include prompts and confirms to combine character types that the user would like included. 

# Importance
Creating a password at random is an important option for a user. This application exemplifies, in small scope, the simple use-case of the need for a unique password/passcode. This may best be suited for a one-time authentication for a user's access to a website for example; or to reset a forgotten password. One can imagine many uses for a similar application functionality.

# Build
The application was built by way of html, bootstrap styling therein, and Javascript functionality. The JS functionality exists in the browser.

# How to Use
1. The user must click the 'Generate Password' button to initiate the applications functionality.
![app](/img1.jpg)
2. The use is then prompted with a question, "How many characters would you like your password to be? Requirement: between 8 and 128." 
![charNumPrompt](/img2.jpg)
3. If the user enters an input that is not a numeral, or a number that is less than 8 or greater than 128, they are alerted with, "Your password length must be between 8 and 128 characters. Please try again."
![alert](/img3.jpg)
4. Once a valide number is entered, the user is presented with the following confirm prompts that are answered as yes/no response: 'Do you want to use upper case characters?;' 'Do you want to use lower case characters?;' 'Do you want to use special characters?;' 'Do you want to use numbers in your password?'
![confirmExample](/img4.jpg)
5. The application then traverses through a string of all character types chosen, and generates a random password that is the same number of characters as the user's initial input.
![result](/img5.jpg)
