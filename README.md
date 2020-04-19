# Password-Generator

This project is able to generate a password on solely user input. 

When the user goes to the site, he/she/they will be able to click on the `generate` button, where a series of prompt and confirm pop-ups will appear in the center of the screen. 

## Prompts

Such pop-ups that the user has to answer are:

- `prompt` How long would you like your password to be? Please choose a number between 8 and 128.

- `confirm` Would you like lowercase letters in your password?

- `confirm` Would you like uppercase letters in your password?

- `confirm` Would you like numbers in your password?

- `confirm` Would you like special characters in your password?

### Password Length

As stated above, the user must select a number between 8 and 128, the numbers themselves included if he/she/they like. Should a user fail to do so, another alert will ask the user to go again with a valid number. The user may wish to cancel if he/she/they do not wish to continue generating a password. 

### `confirm` Questions

For the `confirm` questions, the user has the option to choose 1, 2, 3, or all criteria to generate a password. Should the user not choose any criteria, an alert will pop up, stating that he/she/they did not select enough criteria to generate a password. 


## Coding Logic

#### Variable Declaration

I declared the `lowercase`, `uppercase`, `numbers`, and `specialCharacters` variables with the appropriate strings. I added the `split` command after each string so that each individual character becomes its own string. I also declared a `result` variable so that the final-result generated password can be pushed into the `textContent` of `#password`. Finally I declared some global variables 

```confirmLowercase,
confirmUppercase,
confirmNumbers,
confirmSpecialCharacters,
passwordLength
```

as these will be assigned to the `prompt` and `confirm` statements later on. 

#### Function Generation

I used `addEventListener` to start the function `generatePassword` by a click of the "generate" button. The function will run the password `prompt` and the `confirm` statements with the declared variables. 

Assuming the user chose a valid number for password length, the `confirm` statements will determine how the actual password will look like. Should the user choose any, or all criteria for the pasword, each "confirmed" statement will run through the for-loop, generating a preliminary password, which will be pushed onto another declared variable, `password`. 

That preliminary password goes through another for-loop to reduce the number of characters to the number specified by the user. It will be part of a new variable, `together`. 

Finally, I added the command `join` after `together`, like so

```result.textContent = together.join('');  
```
 
to bring the individual strings together as one, and pushed the `textContent` to the `#password`. The user must now be able to see the newly-generated password in the white box. 