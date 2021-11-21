// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function generatePassword() {
  var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";

  // Password lenghth prompt
  var pwLength = prompt('How long would you like your PW to be?\n(Pick between 8 - 128)', '8');
  // check if user entered a valid number
  if (isNaN(pwLength) || (pwLength < 8) || (pwLength > 128)) {
    console.log('Is NaN');
    pwLength = prompt('How long would you like your PW to be?\nPlease select a number between 8 - 128', '8');
  } else {
    console.log('Number');
  };

  var confirmLower = confirm('Would you like Lowercase Characters in your password?\nOK for yes, Cancel for no');
  var confirmUpper = confirm('Would you like Uppercase Characters in your password?\nOK for yes, Cancel for no');
  var confirmNumbers = confirm('Would you like Numbers in your password?\nOK for yes, Cancel for no');
  var confirmSpecial = confirm('Would you like Special Characters in your password?\nOK for yes, Cancel for no');
  
  console.log(pwLength);
  console.log(confirmLower);
  console.log(confirmUpper);
  console.log(confirmNumbers);
  console.log(confirmSpecial);
};
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
