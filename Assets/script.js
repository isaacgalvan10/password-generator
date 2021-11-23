// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function generatePassword() {
  var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numberChars = '0123456789';
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var selectedChars = [];
  var newPw = [];

  // Password lenghth prompt
  var pwLength = prompt('How long would you like your PW to be?\n(Pick between 8 - 128)', '8');
  // check if user entered a valid number
  if (isNaN(pwLength) || (pwLength < 8) || (pwLength > 128)) {
    pwLength = prompt('How long would you like your PW to be?\nPlease select a number between 8 - 128', '8');
  };

  // Confirm alerts for if user wants lower, upper, numbers, and specials chars
  var confirmLower = confirm('Would you like Lowercase Characters in your password?\nOK for yes, Cancel for no');
  var confirmUpper = confirm('Would you like Uppercase Characters in your password?\nOK for yes, Cancel for no');
  var confirmNumbers = confirm('Would you like Numbers in your password?\nOK for yes, Cancel for no');
  var confirmSpecial = confirm('Would you like Special Characters in your password?\nOK for yes, Cancel for no');

  // Adds selected critieria to a variable as an array
  if (confirmLower) {
    selectedChars = selectedChars.concat(lowerChars.split(''));
  };

  if(confirmUpper) {
    selectedChars = selectedChars.concat(upperChars.split(''));
  };

  if(confirmNumbers) {
    selectedChars = selectedChars.concat(numberChars.split(''));
  };

  if(confirmSpecial) {
    selectedChars = selectedChars.concat(specialChars.split(''));
  };

  // Loops over selected characters and adds them to the newPw array.

  for (let i = 0; i < pwLength; i++) {
    var characters = selectedChars[Math.floor(Math.random() * selectedChars.length)];
    newPw.push(characters);
  }

  return newPw.join('');
};
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
