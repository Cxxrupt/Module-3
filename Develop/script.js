// Assignment code here
const passwordButton = document.getElementById("generate-password-button");

function generatePassword() {
  let passwordLength = prompt("Enter the length of the password (at least 8 characters and no more than 128 characters):");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    return;
  }

  let includeLowercase = confirm("Include lowercase characters?");
  let includeUppercase = confirm("Include uppercase characters?");
  let includeNumeric = confirm("Include numeric characters?");
  let includeSpecial = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected");
    return;
  }

  let password = "";
  let possibleCharacters = "";
  if (includeLowercase) {
    possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumeric) {
    possibleCharacters += "0123456789";
  }
  if (includeSpecial) {
    possibleCharacters += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
  }

  for (let i = 0; i < passwordLength; i++) {
    password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }

  alert("Generated password: " + password);
}


// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
