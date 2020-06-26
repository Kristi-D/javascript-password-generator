// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
    // get password length
    let passwordLength = parseInt(prompt("enter a length for password between 8 and 128"), 10)

    console.log(typeof passwordLength);

    if( isNaN(passwordLength) === true) {
        alert("Password length must be a number!");
        return;
    }

    if (passwordLength < 8) {
      alert("Password length must be greater than or equal to 8");
      return;
    }

    if (passwordLength > 128) {
      alert("Password length must be less than or equal to 128");
      return;
    }

    console.log(passwordLength);

    // get uppercase,
    let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var useUppercase = confirm("do you want to use uppercase characters");

    console.log(useUppercase);

    // get lowercase,
    let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    var useLowercase = confirm("do you want to use lowercase characters");

    console.log(useLowercase);

    // get number,
    let numbers = "0123456789";
    var useNumbers = confirm("do you want to use numbers");

    console.log(useNumbers);

    // get special
    let specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    var useSpecial = confirm("do you want to use special characters");

    console.log(useSpecial);

    var randomPassword = "";

    console.log(randomPassword);

    for (var i = 0; i < parseInt(passwordLength); i++);
    {
      randomPassword =
        specialChars.numbers.lowerCaseChars.upperCaseChars[
          Math.floor(
            Math.random() *
              specialChars.numbers.lowerCaseChars.upperCaseChars.passwordLength
          )
        ];
    }

    return randomPassword;
}

// Write password to the #password input
function writePassword() {
    console.log("Button clicked!")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// validate input

// conditional - if (choicesmake){generatepassword} or else {console.log(please select some character sets to use)}

// generate password

// get the character sets

// randomly select characters to make a password of x length
//Math.random

// display the password

// an alert or prompt that you have met the qualifications
