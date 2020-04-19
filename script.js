// Setting variables with values
var lowercase = "abcdefghijklmnopqrstuvwxyz".split('');
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var number = "0123456789".split('');
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('');
var result = document.querySelector("#password");

// Setting global variables
var confirmLowercase,
  confirmUppercase,
  confirmNumbers,
  confirmSpecialCharacters,
  passwordLength;

// Generate password by button click
document.getElementById("generate").addEventListener("click",         
function generatePassword() {
      alert("Thank you for using our generator. Please answer the following questions to customize your password.");
      passwordLength = prompt("How long would you like your password to be? Please choose a number between 8 and 128.");

    // Setting condition for password length
    if (passwordLength > 7 && passwordLength < 128) {
      
      // Establishing criteria for customized password
      confirmLowercase = confirm("Would you like lowercase letters in your password?");
      confirmUppercase = confirm("Would you like uppercase letters in your password?");
      confirmNumbers = confirm("Would you like numbers in your password?");
      confirmSpecialCharacters = confirm("Would you like special characters in your password?");

      //Giving the generator a moment to construct password
      alert("Please wait a moment...");

      // Results from true statements selected by user (pushed by if-statement)
      var password = [];

      // Series of if-statements from each criteria
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

    // Data validation if user inputs number outside of stated criteria  
    } else if (passwordLength <= 7 || passwordLength >= 128) { {
      passwordLength = confirm("The number you selected is not between 8 and 128. Please try again."); 
      };
        if (passwordLength) {
          generatePassword();
        } else {
          return;
        };
    };
    
    // Alert if user selects "no" to all password criteria
    if (confirmLowercase === false && confirmUppercase === false && confirmNumbers === false && confirmSpecialCharacters === false) {
      alert("Sorry, you did not select enough criteria generate the pasword.");
    };

    // New result by concatenation of previous password and reduce to number stated by user
    var together = [];

    // For-loop generating password with number inputted by user
    for (var i = 0; i < passwordLength; i++) {
      (together.push(password[Math.floor(Math.random() * password.length)]));
    };

    // Eliminate punctuation of new password generated
    result.textContent = together.join('');  
});