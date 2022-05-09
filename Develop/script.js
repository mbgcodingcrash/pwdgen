





// Assignment code here

function generatePassword() {

  //Find out how many Characters Long the Password needs to be
  var passLength= window.prompt("How long of a password between 8-128 Characters")

  //Validate it is within 8-128 char range
    if (passLength <8 || passLength > 128 ) {
    window.alert("Please choose a value between 8-128")
  return passLength}

  
   //Confirm Inclusion of UpperCase 
  var passUppercase= window.confirm("Include Uppercase letters ?")

  // if passUppercase = true then add upperCase

  //Confirm Inclusion of lowercase
  var passLowercase= window.confirm("Include Lowercase letters ?")

  // if passLowercase = true then add lowercase

   //Confirm Inclusion of  special chars
  var specialChars= window.confirm("Include Special Characters ?")

  // if specialChars = true then add chars


   //Confirm Inclusion of numbers
  var numericIncluded= window.confirm("Include Numbers ?")

  // if numericIncluded= true then add numbers

  //Log found data 
  console.log(passLength, passUppercase,passLowercase,specialChars,numericIncluded)


  //Run loop to randomize each char in pass

  var finalPass = Math.floor (Math.random() * passLength)
  


//Return randomized password
  return finalPass
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();
