// 03 JavaScript: Password Generator
// Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.
// If you are unfamiliar with special characters, take a look at some examples.

// User Story
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security

// Acceptance Criteria
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var lowercase = "abcdefghijklmnopqrstuvwxyz".split('');
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var number = "0123456789".split('');
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('');
var result = document.querySelector("#password");

var confirmLowercase,
  confirmUppercase,
  confirmNumbers,
  confirmSpecialCharacters,
  passwordLength;

document.getElementById("generate").addEventListener("click",         function () {
      alert("Thank you for using our generator. Please answer the following questions to customize your password.");
      passwordLength = prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
      confirmLowercase = confirm("Would you like lowercase letters in your password?");
      confirmUppercase = confirm("Would you like uppercase letters in your password?");
      confirmNumbers = confirm("Would you like numbers in your password?");
      confirmSpecialCharacters = confirm("Would you like special characters in your password?");

      alert("Please wait a moment...");

      var password = [];

      if (confirmLowercase) {
        for (var i = 0; i < passwordLength; i++) {
          password.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
        };
      };

      if (confirmUppercase) {
        for (var i = 0; i < passwordLength; i++) {
          password.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
        };
      };

      if (confirmNumbers) {
        for (var i = 0; i < passwordLength; i++) {
          password.push(number[Math.floor(Math.random() * number.length)]);
        };
      };

      if (confirmSpecialCharacters) {
        for (var i = 0; i < passwordLength; i++) {
          password.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
        };
      };

  var together = [];

  for (var i = 0; i < passwordLength; i++) {
    (together.push(password[Math.floor(Math.random() * password.length)]))
  }

  console.log(together);

result.textContent = together.join('');

});